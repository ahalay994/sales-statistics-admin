<template>
    <SearchBlock
        @reset="reset"
        v-model="searchValues"
        @search="search"
    >
        <AddedBtn
            v-if="model && buttonText"
            :model="model"
            :button-text="buttonText"
        />
    </SearchBlock>
    <n-data-table
        ref="tableRef"
        :bordered="false"
        :columns="columns"
        :data="data"
        :loading="loading"
        @update:sorter="sorter"
    />
    <Pagination
        class="justify-end mt-2"
        v-model="pageData"
        @update="pageUpdate"
        :pageCount="pageCount"
        :limitData="limit"
        :totalCount="totalCount"
    />
</template>

<script>
import Pagination from "@c/Table/Pagination.vue";
import SearchBlock from "@c/Table/SearchBlock.vue";
import {ref} from "vue";
import AddedBtn from "@c/Table/AddedBtn.vue";
import { useRoute } from 'vue-router';
import router from '@/router';

export default {
    name: "Table",
    components: {AddedBtn, SearchBlock, Pagination},
    setup() {
        const route = useRoute();

        return {
            route,
            tableRef: ref(null),
            searchValues: ref(''),
            sortValues: ref(null),
        }
    },
    props: {
        store: {
            type: Object
        },
        model: {
            type: String
        },
        buttonText: {
            type: String
        },
        // table
        columns: {
            type: Array,
            default: Array.prototype,
        },
        data: {
            type: Array,
            default: Array.prototype,
        },
        loading: {
            type: Boolean,
            default: true,
        },
        // pagination
        pageCount: {
            type: Number,
            default: 0,
        },
        limit: {
            type: Number,
            default: 10,
        },
        page: {
            type: Number,
            default: 1,
        },
        totalCount: {
            type: Number,
            default: 0,
        },
    },
    data() {
        return {
            pageData: this.page,
        }
    },
    methods: {
        reset() {
            this.store.loading = true;
            this.store.getAll();
            this.tableRef.sort(null);
        },
        sorter(value) {
            this.sortValues = value;
            this.pageUpdate();
        },
        search() {
            this.pageData = 1;
            this.pageUpdate();
        },
        pageUpdate() {
            router.replace({query: this.pageData > 1 ? {page: this.pageData} : {}});

            const paginationQuery = {page: this.pageData, limit: this.limit};
            const searchQuery = {search: this.searchValues};
            let sortQuery = {};
            if (this.sortValues) {
                const fieldName = this.sortValues.columnKey;
                const orderType = this.sortValues.order === 'descend' ? 'desc' : 'asc';
                sortQuery = {[fieldName]: orderType};
            }

            this.store.getAll({...searchQuery, ...sortQuery, ...paginationQuery});
        }
    }
}
</script>

<style scoped>

</style>
