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
    },
    data() {
        return {
            limitData: Number(this.route?.query?.limit) || this.limit,
            pageData: Number(this.route?.query?.page) || this.page,
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
            this.page = 1;
            this.pageUpdate();
        },
        pageUpdate() {
            if (this.pageData > 1) {
                router.replace({query: {page: this.pageData, limit: this.limitData}});
            } else {
                router.replace({query: {}});
            }

            const searchQuery = {search: this.searchValues};
            const paginationQuery = {page: this.pageData};
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
