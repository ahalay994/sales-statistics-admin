import axios from 'axios';

const user = {
    state: () => ({
        user: !!localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
        loggedIn: !!localStorage.getItem('token') && !!localStorage.getItem('user'),
        token: localStorage.getItem('token') || null
    }),
    getters: {
        user(state) {
            return state.user;
        },
        isAdmin(state) {
            return state.user?.isAdmin || false;
        },
        loggedIn(state) {
            return state.loggedIn;
        },
        token(state) {
            return state.token;
        }
    },
    mutations: {
        setUser: (state, payload) => {
            delete payload.accessToken;
            localStorage.setItem('user', JSON.stringify({
                ...payload
            }));
            return state.user = payload;
        },
        removeUser: state => {
            localStorage.removeItem('user');
            return state.user = null;
        },
        loggedIn: (state, payload) => {
            return state.loggedIn = payload;
        },
        setToken: (state, accessToken) => {
            localStorage.setItem('token', accessToken);
            return state.token = accessToken;
        },
        removeToken: state => {
            localStorage.removeItem('token');
            return state.token = null;
        }
    },
    actions: {
        login({ commit }, user) {
            return new Promise(resolve => {
                axios
                  .post('api/auth/login', {
                      ...user
                  })
                  .then(function(response) {
                      commit('setUser', { ...response.data.data });
                      commit('setToken', response.data.data.accessToken);
                      commit('loggedIn', true);
                      resolve(response.data);
                  })
                  .catch(function(error) {
                      resolve(error.response.data);
                  });
            });
        },
        logout({ commit }) {
            commit('removeUser');
            commit('removeToken');
            commit('loggedIn', false);
        },
        getCurrentUser({ commit, getters }) {
            if (getters.loggedIn) {
                const config = {
                    headers: { Authorization: `Bearer ${getters.token}` }
                };

                return new Promise((resolve, reject) => {
                    axios
                      .post('/api/auth/user', {}, config)
                      .then(function(response) {
                          commit('setUser', { ...response.data.data });
                          resolve(response.data);
                      })
                      .catch(function(error) {
                          reject(error.response.data);
                      });
                });
            }
        },
    }
};

export default {
    namespaced: true,
    ...user
};
