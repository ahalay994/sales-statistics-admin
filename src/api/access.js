import {mande} from 'mande';
const accesses = mande('/api/access');

export const getAccesses = async () => accesses.get('/');
export const getAccessesFormatted = async () => accesses.get('?formatted=true');
export const getAccess = async id => accesses.get(id);
export const createAccess = async data => accesses.post(data);
export const updateAccess = async data => accesses.put(data);
export const deleteAccess = async id => accesses.delete(id);
export const restoreAccess = async id => accesses.patch(id);

