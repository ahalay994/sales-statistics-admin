<template>
    <n-dropdown trigger="click" :options="options" :show-arrow="true" :render-label="renderDropdownLabel">
        <button type="button" class="bg-gray-800 flex text-sm rounded-full" id="user-menu-button" aria-expanded="false"
                aria-haspopup="true">
            <span class="sr-only">Open user menu</span>
            <n-avatar
                round
                size="medium"
                src="http://p.vueadminwork.com/assets/img_avatar.1d4c4a34.gif"
            />
        </button>
    </n-dropdown>
</template>

<script>
import {h, resolveComponent} from 'vue';
import {useMessage} from "naive-ui";
import {Auth} from '@/stores/auth.js';
import router from '@/router';

export default {
    name: "ProfileToggle",
    setup() {
        const message = useMessage();
        const auth = Auth();

        return {
            options: [
                {
                    label: 'Профиль',
                    key: 'admin.dashboard'
                },
                {
                    label: 'Выход',
                    key: 'logout',
                    props: {
                        onClick: () => {
                            auth.logout();
                            message.success('Вы успешно вышли из системы');
                            router.push({name: 'login'});
                        }
                    }
                }
            ]
        };
    },
    methods: {
        renderDropdownLabel(option) {
            if (option.key === 'logout') return option.label;
            return h(
                resolveComponent('router-link'),
                {
                    to: {name: option.key}
                },
                option.label
            );
        },
    }
}
</script>

<style scoped>

</style>
