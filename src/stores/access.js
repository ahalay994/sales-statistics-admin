import {defineStore} from 'pinia';
import {getAccess, getAccesses, getAccessesFormatted} from '@/api/access.js';

export const Access = defineStore('access', {
    state: () => ({
        accesses: [],
        access: {},
        loading: true,
    }),
    getters: {},
    actions: {
        async getAccesses(formatted = false) {
            const accesses = await (formatted ? getAccessesFormatted() : getAccesses());
            this.accesses = accesses.data;

            return accesses.data;
        },
        async getAccess(key) {
            const access = await getAccess(key);
            this.access = access.data;
            this.setLoading(false);

            return access.data;
        },
        setLoading(state) {
            this.loading = state;
        }
    }
});
