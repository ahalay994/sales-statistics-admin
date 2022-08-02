import Dashboard from "@v/admin/Dashboard.vue";
/** **/
import Users from "@v/admin/Users/index.vue";
import User from "@v/admin/Users/Show.vue";
import UserEdit from "@v/admin/Users/Edit.vue";
import UserCreate from "@v/admin/Users/Create.vue";
/** **/
import Access from '@v/admin/Access/index.vue';

export default [
    {
        path: '/admin/dashboard',
        name: 'admin.dashboard',
        component: Dashboard,
    },
    /** User **/
    {
        path: '/admin/users',
        name: 'admin.users',
        component: Users
    },
    {
        path: '/admin/users/:id',
        name: 'admin.users.show',
        component: User
    },
    {
        path: '/admin/users/:id/edit',
        name: 'admin.users.edit',
        component: UserEdit
    },
    {
        path: '/admin/users/create',
        name: 'admin.users.create',
        component: UserCreate
    },
    /** Access **/
    {
        path: '/admin/access',
        name: 'admin.access',
        component: Access
    }
]
