<template>
    <n-config-provider :theme="lightTheme" :locale="ruRU" :date-locale="dateRuRU">
        <n-loading-bar-provider>
            <n-message-provider>
                <n-notification-provider>
                    <n-dialog-provider>
                        <AppLayout />
                    </n-dialog-provider>
                </n-notification-provider>
            </n-message-provider>
        </n-loading-bar-provider>
        <n-global-style/>
    </n-config-provider>
</template>

<script>
import {darkTheme, lightTheme, ruRU, dateRuRU, NMessageProvider, NThemeEditor} from 'naive-ui';
import {defineComponent} from 'vue';
import AppLayout from '@/layouts/AppLayout.vue';

export default defineComponent({
    components: {
        NMessageProvider,
        NThemeEditor,
        AppLayout,
    },
    setup() {
        return {
            darkTheme,
            lightTheme,
            ruRU,
            dateRuRU
        };
    },
});
</script>
