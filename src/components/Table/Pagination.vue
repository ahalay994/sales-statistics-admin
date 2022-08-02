<template>
    <n-pagination
        :page="modelValue"
        @update:page="updatePage"
        :page-count="pageCount"
        :default-page-size="limitData"
    >
        <template #prefix>
            Всего записей: {{totalCount}}
        </template>
    </n-pagination>
</template>

<script>
export default {
    name: "Pagination",
    props: {
        modelValue: {
            type: Number,
            default: 1,
        },
        pageCount: {
            type: Number,
            default: 1,
        },
        limitData: {
            type: Number,
            default: 1,
        },
        totalCount: {
            type: Number,
            default: 0,
        },
    },
    methods: {
        updatePage(currentPage) {
            this.$emit('update:modelValue', currentPage);
            this.$emit('update');
        },
    }
}
</script>

<style scoped>

</style>
