import {defineStore} from 'pinia';
import {getRecord, getRecords} from '@/api/access.js';

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
            const accesses = await getRecords(params);
            this.records = accesses.data;
            this.pagination = accesses.pagination;
            this.setLoading(false);
            return accesses.data;
        },
        async get(key) {
            this.setLoading(true);
            const access = await getRecord(key);
            this.record = access.data;
            this.setLoading(false);

            return access.data;
        },
        setLoading(state) {
            this.loading = state;
        }
    }
});
