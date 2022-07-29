<template>
    <n-form-item-row label="Имя" path="Profile.firstName">
        <n-input placeholder="Введите имя" v-model:value="formValue.Profile.firstName"/>
    </n-form-item-row>
    <n-form-item-row label="Фамилия" path="Profile.lastName">
        <n-input placeholder="Введите фамилию" v-model:value="formValue.Profile.lastName"/>
    </n-form-item-row>
    <n-form-item-row label="Отчество" path="Profile.patronymicName">
        <n-input placeholder="Введите отчество" v-model:value="formValue.Profile.patronymicName"/>
    </n-form-item-row>
    <n-form-item-row label="Дата рождения" path="Profile.dateOfBirth">
        <n-date-picker v-model:value="formValue.Profile.dateOfBirth" type="date" format="dd.MM.yyyy"/>
    </n-form-item-row>
</template>

<script>
export default {
    name: "ProfileTab",
    props: {
        formValue: null
    },
}
</script>

<style scoped>

</style>
