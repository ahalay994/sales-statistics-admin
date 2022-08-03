import {mande} from 'mande';
const records = mande('/api/access');

function formattedSearchParams(params) {
    return new URLSearchParams(params).toString();
}
export function setToken(token) {
    records.options.headers.Authorization = 'Bearer ' + token
}

export const getRecords = async (params) => records.get(!!params ? `?${formattedSearchParams(params)}` : '/');
export const getRecord = async id => records.get(id);
export const createRecord = async data => records.post(data);
export const updateRecord = async (id, data) => records.put(id, data);
export const deleteRecord = async id => records.delete(id);
export const restoreRecord = async id => records.patch(id);

