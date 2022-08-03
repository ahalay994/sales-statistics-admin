import {mande} from 'mande';
const records = mande('/api/user');

function formattedSearchParams(params) {
    return new URLSearchParams(params).toString();
}
export function setToken(token) {
    records.options.headers.Authorization = 'Bearer ' + token
}

export const getRecords = async (params) => records.get(!!params ? `?${formattedSearchParams(params)}` : '/');
export const getRecord = async id => records.get(id);
export const createUser = async data => records.post(data);
export const updateUser = async (id, data) => records.put(id, data);
export const updateBlockedUser = async (id, data) => records.put(`/${id}/blocked`, data);
export const deleteUser = async id => records.delete(id);
export const restoreUser = async id => records.patch(id);

