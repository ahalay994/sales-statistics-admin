import {mande} from "mande";
import {getLocalStorage, formattedSearchParams} from '@/helper';

export function Api(model) {
    this._records = mande(`/api/${model}`);
    this._records.options.headers.Authorization = `Bearer ${getLocalStorage('token')}`;

    this.getRecords = async(params) => {
        return this._records.get(!!params ? `?${formattedSearchParams(params)}` : '/');
    }
    this.getRecord = async(id) => {
        return this._records.get(id);
    }
    this.createRecord = async(data) => {
        return this._records.post(data);
    }
    this.updateRecord = async(id, data) => {
        return this._records.put(id, data);
    }
    this.deleteRecord = async(id) => {
        return this._records.delete(id);
    }
    this.restoreRecord = async(id) => {
        return this._records.patch(id);
    }
}
