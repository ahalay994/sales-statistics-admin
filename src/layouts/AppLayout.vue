<template>
    <component :is="$route.meta.layout || AppLayoutDefault">
        <router-view />
    </component>
</template>

<script>
import AppLayoutDefault from './AppLayoutDefault.vue';

export default {
    name: 'AppLayout',
    setup() {
        return {
            AppLayoutDefault
        }
    },
}
</script>
