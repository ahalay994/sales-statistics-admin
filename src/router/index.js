import { createRouter, createWebHistory } from 'vue-router';
import { Auth } from '@/stores/auth';

import guest from './middleware/guest';
import auth from './middleware/auth';
import isAdmin from './middleware/isAdmin';
import middlewarePipeline from './middlewarePipeline';

import admin from './admin.js';

import AppLayoutAdmin from '@/layouts/AppLayoutAdmin.vue';
import Dashboard from "@v/admin/Dashboard.vue";
import users from './admin/users.js';

const routes = [
    {
        path: '/',
        name: 'login',
        component: import('@/views/Login.vue'),
        meta: {
            middleware: [guest],
        }
    },
    {
        path: '/admin',
        name: 'admin',
        redirect: { name: 'admin.dashboard' },
        meta: {
            layout: AppLayoutAdmin,
            // middleware: [isAdmin],
        },
        children: [
            {
                path: '/admin/dashboard',
                name: 'admin.dashboard',
                component: Dashboard,
            },
            ...Object.values(users)
        ]
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {
    if (!to.meta.middleware) {
        return next();
    }
    const auth = Auth();
    const middleware = to.meta.middleware;
    const context = {
        to,
        from,
        next,
        auth
    };
    return middleware[0]({
        ...context,
        next: middlewarePipeline(context, middleware, 1)
    });
});

export default router;
