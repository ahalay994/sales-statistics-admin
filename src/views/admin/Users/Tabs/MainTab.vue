<template>
    <n-form-item-row label="Email" path="email">
        <n-input placeholder="Введите email" v-model:value="formValue.email"/>
    </n-form-item-row>
    <n-form-item-row label="Блокировка">
        <n-switch v-model:value="formValue.isBlocked">
            <template #checked>
                Заблокирован
            </template>
            <template #unchecked>
                Разблокирован
            </template>
        </n-switch>
    </n-form-item-row>
</template>

<script>
import {ref} from "vue";

export default {
    name: "MainTab",
    props: {
        formValue: null
    },
}
</script>

<style scoped>

</style>
