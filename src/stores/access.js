import {defineStore} from 'pinia';
import {get, getAll} from '@/api/access.js';

export const Access = defineStore('access', {
    state: () => ({
        accesses: [],
        access: {},
        loading: false,
        totalPages: 0,
    }),
    getters: {},
    actions: {
        async getAll(params = null) {
            this.setLoading(true);

            const accesses = await getAll(params);
            this.accesses = accesses.data;
            this.totalPages = accesses.pagination.totalPages;

            this.setLoading(false);
            return accesses.data;
        },
        async get(key) {
            this.setLoading(true);

            const access = await get(key);
            this.access = access.data;
            this.setLoading(false);

            return access.data;
        },
        setLoading(state) {
            this.loading = state;
        }
    }
});
