<template>
    <n-space :vertical="true" class="p-2">
        <n-card class="h-full" content-style="padding: 8px;" header-style="padding: 8px; gap: 16px">
            <Table
                v-if="!!records"
                :columns="columns"
                :store="accessStore"
                model="access"
                buttonText="Добавить роль"
                :data="records"
            />
        </n-card>
    </n-space>
</template>

<script>
import {h} from "vue";
import {storeToRefs} from "pinia";
import {useRoute} from "vue-router";
import {Main} from '@/stores/main.js';
import {Access} from '@/stores/access.js';
import ButtonGroup from "@c/Table/ButtonGroup.vue";
import Table from "@c/Table/index.vue";
import Pagination from "@c/Table/Pagination.vue";

export default {
    name: "Dashboard",
    components: {Table, Pagination},
    setup() {
        // main
        const mainStore = Main();
        const {setBreadcrumbs, setPagination} = mainStore;
        const breadcrumbs = [
            {
                name: 'Главная',
                href: 'admin.dashboard',
            },
            {
                name: 'Роли',
            },
        ];
        const paginationPage = {
            title: `Роли`,
            icon: 'https://cdnimg103.lizhi.fm/user/2017/02/04/2583325032200238082_160x160.jpg'
        }
        setBreadcrumbs(breadcrumbs);
        setPagination(paginationPage);

        // data
        const accessStore = Access();
        const route = useRoute();
        const pageQuery = !!route.query?.page ? {page: Number(route.query?.page)} : {};
        accessStore.getRecords(pageQuery);

        const {records} = storeToRefs(accessStore);

        return {
            accessStore,
            records,
        }
    },
    data() {
        return {
            columns: [
                {
                    title: "#",
                    key: "id",
                    sorter: true
                },
                {
                    title: "Название",
                    key: "name",
                    sorter: true,
                },
                {
                    title: 'Slug',
                    key: 'slug',
                },
                {
                    title: "",
                    key: "actions",
                    width: 100,
                    render(row) {
                        return h(ButtonGroup, {
                            isShow: false,
                            data: {
                                row,
                                model: 'access',
                                route: 'access',
                            }
                        }, {})
                    }
                }
            ],
        }
    },
}
</script>
