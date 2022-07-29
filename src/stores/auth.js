import {defineStore} from 'pinia';
import {login} from '@/api/auth.js';

export const Auth = defineStore('auth', {
    state: () => ({
        user: !!localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
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
            localStorage.setItem('user', JSON.stringify(payload.data));
            this.user = payload;
        },
    }
});
