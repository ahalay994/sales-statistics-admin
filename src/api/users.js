import {mande} from 'mande';
const users = mande('/api/user');

export const getUsers = async () => users.get('/');
export const getUserById = async id => users.get(id);
export const createUser = async data => users.post(data);
export const updateUser = async data => users.put(data);
export const deleteUser = async id => users.delete(id);
export const restoreUser = async id => users.patch(id);

