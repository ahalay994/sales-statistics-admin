<template>
    <n-form-item label="Поиск">
        <n-input placeholder="Поиск..." v-model:value="modelValue" @input="updateValue" @keyup.enter="search" clearable @clear="clear" />
        <div class="flex gap-2">
            <n-button type="primary" ghost @click="search">Поиск</n-button>
            <n-button type="warning" ghost @click="reset">Сбросить</n-button>
        </div>
        <slot />
    </n-form-item>
</template>

<script>
export default {
    name: "SearchBlock",
    props: {
        modelValue: {
            type: String,
            default: '',
        },
    },
    methods: {
        updateValue(value) {
            this.$emit('update:modelValue', value);
        },
        search() {
            this.$emit('search');
        },
        clear() {
            this.$emit('update:modelValue', '');
            this.$emit('clear');
        },
        reset() {
            this.$emit('update:modelValue', '');
            this.$emit('reset');
        },
    }
}
</script>

<style scoped>

</style>
