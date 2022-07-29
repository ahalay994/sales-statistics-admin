import { mande } from 'mande';
const users = mande('/api/auth/login');

export const login = async data => users.post(data);
