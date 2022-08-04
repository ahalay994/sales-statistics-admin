import Api from './index.js';
import {initMande} from "@/helper/index.js";

export default class UsersApi extends Api {
    constructor(model) {
        super(model);
        this._records = initMande(model);
    }

    async updateBlockedUser(id, data) {
        return this._records.put(`/${id}/blocked`, data);
    }
}

