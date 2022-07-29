<template>
    <n-form :model="formValue" :rules="rules" ref="formRef">
        <n-tabs type="line" animated>
            <n-tab-pane name="main-info" tab="Основная информация">
                <MainTab :formValue="formValue"/>
            </n-tab-pane>

            <n-tab-pane name="profile-info" tab="Данные профиля">
                <ProfileTab :formValue="formValue"/>
            </n-tab-pane>

            <n-tab-pane name="access-info" tab="Доступы">
                <AccessTab :formValue="formValue"/>
            </n-tab-pane>
        </n-tabs>
        <n-divider class="!mt-0"/>
        <n-button @click.prevent="save">
            Сохранить
        </n-button>
    </n-form>
</template>

<script>
import {ref} from "vue";
import {useMessage} from "naive-ui";
import {Users} from '@/stores/users.js';
import MainTab from "./MainTab.vue";
import ProfileTab from "./ProfileTab.vue";
import AccessTab from "./AccessTab.vue";

export default {
    name: "Tabs",
    components: {AccessTab, ProfileTab, MainTab},
    setup() {
        const formRef = ref(null);
        const message = useMessage();
        const users = Users();

        return {
            formRef,
            message,
            rules: users.formRules,
            save() {
                formRef.value?.validate((errors) => {
                    if (!errors) {
                        message.success("Valid");
                    } else {
                        message.error("Invalid");
                    }
                });
            }
        }
    },
    props: {
        data: {
            type: Object,
            default: {
                isBlocked: false,
                Profile: {},
                UserAccess: {
                    accessId: 3
                }
            }
        }
    },
    data() {
        return {
            formValue: {
                ...this.data
            }
        }
    }
}
</script>
