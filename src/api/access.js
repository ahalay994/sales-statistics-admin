import {mande} from 'mande';
const accesses = mande('/api/access');

function formattedSearchParams(params) {
    return new URLSearchParams(params).toString();
}

export const getAll = async (params) => accesses.get(!!params ? `?${formattedSearchParams(params)}` : '/');
export const get = async id => accesses.get(id);
export const createAccess = async data => accesses.post(data);
export const updateAccess = async data => accesses.put(data);
export const deleteAccess = async id => accesses.delete(id);
export const restoreAccess = async id => accesses.patch(id);

