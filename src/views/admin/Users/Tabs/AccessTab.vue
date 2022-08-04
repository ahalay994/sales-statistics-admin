<template>
    <n-form-item-row label="Роль" path="UserAccess.accessId">
        <n-select
            placeholder="Выберите роль"
            v-model:value="formValue.UserAccess.accessId"
            :options="accesses.map((a) => ({label: a.name,value: a.id}))"
        />
    </n-form-item-row>
</template>

<script>
import {Access} from "@/stores/access.js";
import {ref, onMounted} from 'vue';

export default {
    name: "AccessTab",
    props: {
        formValue: {
            type: Object,
            default: Object.prototype
        }
    },
    setup() {
        const accessStore = Access();
        const accesses = ref([]);

        onMounted(async () => {
            accesses.value = await accessStore.getRecords();
        });

        return {
            accesses,
            accessStore,
        }
    },
}
</script>
