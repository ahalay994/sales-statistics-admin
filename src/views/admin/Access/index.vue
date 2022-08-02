<template>
    <n-space :vertical="true" class="p-2">
        <n-card class="h-full" content-style="padding: 8px;" header-style="padding: 8px; gap: 16px">
            <Table
                :columns="columns"
                :loading="loading"
                :data="accesses"
                :page-count="totalPages"
                :store="accessStore"
                model="access"
                buttonText="Добавить роль"
                :limit="limitData"
                :page="pageData"
                :totalCount="totalCount"
            />
        </n-card>
    </n-space>
</template>

<script>
import {Main} from '@/stores/main.js';
import {Access} from '@/stores/access.js';
import {storeToRefs} from "pinia";
import {h} from "vue";
import ButtonGroup from "@c/Table/ButtonGroup.vue";
import Pagination from "@c/Table/Pagination.vue";
import Table from "@c/Table/index.vue";
import {useRoute} from 'vue-router';

export default {
    name: "Dashboard",
    components: {Table, Pagination},
    setup() {
        const route = useRoute();
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
        const {accesses, loading, totalPages, limit, page, totalCount} = storeToRefs(accessStore);
        const pageData = Number(route.query?.page) || page.value;
        const limitData = Number(limit.value);
        accessStore.getAll({page: pageData, limit: limitData});

        return {
            totalPages,
            accessStore,
            loading,
            accesses,
            pageData,
            limitData,
            totalCount,
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
