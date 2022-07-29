import {mande, defaults} from 'mande';
import {Auth} from '@/stores/auth.js';
const auth = Auth();

export default url => {
    defaults.headers.Authorization = `Bearer ${auth.token}`;
    return mande(url);
}
