import {defineStore} from 'pinia';

export const Main = defineStore('main', {
    state: () => ({
        breadcrumbs: [],
        pagination: {},
    }),
    getters: {},
    actions: {
        setBreadcrumbs(breadcrumbs) {
            this.breadcrumbs = breadcrumbs;
        },
        setPagination(pagination) {
            this.pagination = pagination;
        },
    },
})
