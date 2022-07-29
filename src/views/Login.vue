<template>
    <div class="sm:container flex items-center justify-center h-full">
        <n-form class="shadow-inner p-8 " ref="formRef" :model="formValue" :rules="rules">
            <n-form-item label="E-mail" path="email">
                <n-input v-model:value="formValue.email" name="email" placeholder="Введите email"/>
            </n-form-item>
            <n-form-item label="Пароль" path="password">
                <n-input v-model:value="formValue.password" type="password" name="password" placeholder="Введите пароль"/>
            </n-form-item>
            <n-button @click.prevent="handleValidateClick">Войти</n-button>
        </n-form>
    </div>
</template>

<script>
import {ref} from 'vue';
import {useMessage, NForm, NFormItem, NInput} from 'naive-ui';
import router from '@/router';
import { Auth } from '@/stores/auth.js';

export default {
    name: 'Login',
    components: {
        NForm,
        NFormItem,
        NInput
    },
    setup() {
        const formRef = ref(null);
        const message = useMessage();
        const auth = Auth();
        const { login } = auth;

        return {
            formRef,
            message,
            login,
            formValue: ref({
                email: 'ahalay994@gmail.com',
                password: '15966951'
            }),
            rules: {
                email: {
                    required: true,
                    validator(rule, value) {
                        if (!value) {
                            return new Error("Введите email");
                        }
                        return true;
                    },
                    trigger: 'blur'
                },
                password: {
                    required: true,
                    message: 'Введите пароль',
                    trigger: ['input', 'blur']
                }
            },
        };
    },
    methods: {
        handleValidateClick() {
            this.formRef.validate((errors) => {
                if (!errors) {
                    this.authorization();
                } else {
                    this.message.error('Все поля обязательны к заполнению');
                }
            });
        },
        async authorization() {
            const message = this.message;
            const result = await this.login(this.formRef.model);
            if (result.status) {
                message.success(result.message);
                await router.push({name: 'admin.dashboard'});
            } else {
                message.error(result.message);
            }
        }
    }
};
</script>
