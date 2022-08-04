import {formattedSearchParams, initMande} from '@/helper';

export default class Api {
    constructor(model) {
        this._records = initMande(model);
    }

    async getRecords(params) {
        return this._records.get(!!params ? `?${formattedSearchParams(params)}` : '/');
    }
    async getRecord(id) {
        return this._records.get(id);
    }
    async createRecord(data) {
        return this._records.post(data);
    }
    async updateRecord(id, data) {
        return this._records.put(id, data);
    }
    async deleteRecord(id) {
        return this._records.delete(id);
    }
    async restoreRecord(id) {
        return this._records.patch(id);
    }
}
