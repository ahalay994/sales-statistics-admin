import Accesses from "@v/admin/Access/index.vue";
import AccessCreate from "@v/admin/Access/Create.vue";
import AccessEdit from "@v/admin/Access/Edit.vue";

export default [
    {
        path: '/admin/access',
        name: 'admin.access',
        component: Accesses
    },
    {
        path: '/admin/access/create',
        name: 'admin.access.create',
        component: AccessCreate
    },
    {
        path: '/admin/access/:id/edit',
        name: 'admin.access.edit',
        component: AccessEdit
    },
]
