import {defineStore} from 'pinia';
import {getRecord, getRecords} from '@/api/users.js';

export const Users = defineStore('users', {
    state: () => ({
        records: null,
        record: null,
        loading: false,
        pagination: {},
    }),
    getters: {
        formRules: () => {
            return {
                email: {
                    required: true,
                    message: "Пожалуйста введите email",
                },
                Profile: {
                    firstName: {
                        required: true,
                        message: "Пожалуйста введите имя",
                    },
                    lastName: {
                        required: true,
                        message: "Пожалуйста введите фамилию",
                    },
                    patronymicName: {
                        required: true,
                        message: "Пожалуйста введите отчество",
                    },
                    dateOfBirth: {
                        type: "number",
                        required: true,
                        trigger: ["blur", "change"],
                        message: "Пожалуйста выберите дату рождения",
                    },
                },
            };
        },
    },
    actions: {
        async getRecords(params = {}) {
            this.setLoading(true);

            const users = await getRecords(params);
            this.records = users.data;
            this.pagination = users.pagination;

            this.setLoading(false);
        },
        async getRecord(id) {
            const user = await getRecord(id);
            this.record = user.data;
            this.setLoading(false);
        },
        setLoading(state) {
            this.loading = state;
        }
    }
});
