import {defineStore} from 'pinia';
import {AccessApi} from '@/api/access.js';
const accessApi = new AccessApi('access');

export const Access = defineStore('access', {
    state: () => ({
        records: null,
        record: null,
        loading: false,
        pagination: null,
    }),
    getters: {},
    actions: {
        async getRecords(params = {}) {
            this.setLoading(true);
            const accesses = await accessApi.getRecords(params);
            this.records = accesses.data;
            this.pagination = accesses.pagination;
            this.setLoading(false);
            return accesses.data;
        },
        async get(key) {
            this.setLoading(true);
            const access = await accessApi.getRecord(key);
            this.record = access.data;
            this.setLoading(false);

            return access.data;
        },
        setLoading(state) {
            this.loading = state;
        }
    }
});
