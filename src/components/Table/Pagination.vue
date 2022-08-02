<template>
    <n-pagination
        :page="modelValue"
        @update:page="updatePage"
        :page-count="pageCount"
        :default-page-size="10"
    >
<!--        <template #prefix="{ itemCount, startIndex }">
            Страница {{itemCount}} из {{startIndex}}. Всего записей: 3
        </template>-->
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
        }
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
