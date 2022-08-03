/*import {mande} from "mande";
import {Auth} from "@/stores/auth.js";

const _authStore = Auth();
const _records = mande(`/api/access`);
_records.options.headers.Authorization = `Bearer ${_authStore.token}`;

const _formattedSearchParams = params => {
    return new URLSearchParams(params).toString();
}

export const getRecords = async function (params) {
    return _records.get(!!params ? `?${_formattedSearchParams(params)}` : '/');
}
export const getRecord = async function (id) {
    return _records.get(id);
}
export const createRecord = async function (data) {
    return _records.post(data);
}
export const updateRecord = async function (id, data) {
    return _records.put(id, data);
}
export const deleteRecord = async function (id) {
    return _records.delete(id);
}
export const restoreRecord = async function (id) {
    return _records.patch(id);
}*/

/*import {mande} from "mande";

export const Api = (model = 'access', token = '') => {
    const _records = mande(`/api/${model}`);
    _records.options.headers.Authorization = `Bearer ${token}`;

    const _formattedSearchParams = params => {
        return new URLSearchParams(params).toString();
    }

    const getRecords = async function (params) {
        return _records.get(!!params ? `?${_formattedSearchParams(params)}` : '/');
    }
    const getRecord = async function (id) {
        return _records.get(id);
    }
    const createRecord = async function (data) {
        return _records.post(data);
    }
    const updateRecord = async function (id, data) {
        return _records.put(id, data);
    }
    const deleteRecord = async function (id) {
        return _records.delete(id);
    }
    const restoreRecord = async function (id) {
        return _records.patch(id);
    }
}*/

import {mande} from "mande";
import {formattedSearchParams} from '@/helper/index.js';

class Api {
    constructor(model = 'access', token = '') {
        this.records = mande(`/api/${model}`);
        this.records.options.headers.Authorization = `Bearer ${token}`;
    }

    async getRecords(params) {
        return this.records.get(!!params ? `?${formattedSearchParams(params)}` : '/');
    }

    async getRecord(id) {
        return this.records.get(id);
    }
    async createRecord(data) {
        return this.records.post(data);
    }
    async updateRecord(id, data) {
        return this.records.put(id, data);
    }
    async deleteRecord(id) {
        return this.records.delete(id);
    }
    async restoreRecord(id) {
        return this.records.patch(id);
    }
}

export default Api;
