import {defineStore} from 'pinia';
import {login} from '@/api/auth.js';
import {getLocalStorage, setLocalStorage} from '@/helper';

export const Auth = defineStore('auth', {
    state: () => ({
        user: getLocalStorage('user'),
        token: getLocalStorage('token'),
    }),
    getters: {
        loggedIn: (state) => !!state.user,
        token: (state) => state.user?.accessToken || null,
    },
    actions: {
        async login(data) {
            if (this.user !== null) throw new Error('Пользователь уже авторизован');
            const res = await login(data);
            if (res.status) {
                this.updateUser(res);
            }

            return res;
        },
        logout() {
            localStorage.removeItem('user');
            this.$reset();
        },
        updateUser(payload) {
            setLocalStorage('user', payload.data);
            setLocalStorage('token', payload.data.accessToken);
            this.user = payload;
        },
    }
});
