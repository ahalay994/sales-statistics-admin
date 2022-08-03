<template>
    <SearchBlock
        @reset="reset"
        v-model="searchValues"
        @search="search"
        @clear="pageUpdate"
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
        v-model="page"
        @update="pageUpdate"
        :pageCount="pagination?.pageCount"
        :limitData="pagination?.limit"
        :totalCount="pagination?.totalCount"
    />
</template>

<script>
import {ref} from "vue";
import {useRoute} from 'vue-router';
import {storeToRefs} from "pinia";
import router from '@/router';
import AddedBtn from "@c/Table/AddedBtn.vue";
import SearchBlock from "@c/Table/SearchBlock.vue";
import Pagination from "@c/Table/Pagination.vue";
import {getRecords} from "@/api/access.js";

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
            type: Object,
            required: true,
        },
        model: {
            type: String,
            required: true,
        },
        buttonText: {
            type: String,
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
    },
    data() {
        return {
            loading: true,
            pagination: {},
            page: 1,
        };
    },
    mounted() {
        const {loading, pagination} = storeToRefs(this.store);
        Object.assign(this, {
            loading,
            pagination,
            page: pagination.value.page,
        });
    },
    methods: {
        pageUpdate() {
            // отображение в урле параметров пагинации
            router.replace({name: `admin.${this.model}`, query: this.page > 1 ? {page: this.page} : {}});

            const paginationQuery = {page: this.page};
            const searchQuery = {search: this.searchValues};
            let sortQuery = {};
            if (this.sortValues) {
                const fieldName = this.sortValues.columnKey;
                const orderType = this.sortValues.order === 'descend' ? 'desc' : 'asc';
                sortQuery = {[fieldName]: orderType};
            }

            this.store.getRecords({...searchQuery, ...sortQuery, ...paginationQuery});
        },
        // search block
        reset() {
            this.page = 1;
            this.tableRef.sort(null);
        },
        search() {
            this.page = 1;
            this.pageUpdate();
        },
        // table
        sorter(value) {
            this.sortValues = value;
            this.pageUpdate();
        },
    }
}
</script>
