<template>
    йвцйвцв
</template>

<script>
import {Main} from '@/stores/main.js';

export default {
    name: "Dashboard",
    setup() {
        const main = Main();
        const {setBreadcrumbs, setPagination} = main;
        const breadcrumbs = [
            {
                name: 'Главная',
            }
        ];
        const pagination = {
            title: `Dashboard`,
            icon: 'https://cdnimg103.lizhi.fm/user/2017/02/04/2583325032200238082_160x160.jpg'
        }
        setBreadcrumbs(breadcrumbs);
        setPagination(pagination);
    },
}
</script>

<style scoped>

</style>
