<template>
    <n-breadcrumb>
        <n-breadcrumb-item v-for="(breadcrumb, key) in breadcrumbs" :key="key">
            <router-link v-if="breadcrumb.href" :to="{ name: breadcrumb.href }">{{ breadcrumb.name }}</router-link>
            <span v-else>{{ breadcrumb.name }}</span>
        </n-breadcrumb-item>
    </n-breadcrumb>
</template>

<script>
import {storeToRefs} from 'pinia';
import {Main} from '@/stores/main.js';

export default {
    name: "Breadcrumb",
    setup() {
        const main = Main();
        const {breadcrumbs} = storeToRefs(main);

        return {
            breadcrumbs
        }
    }
}
</script>
