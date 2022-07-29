<template>
    <n-button-group>
        <router-link
            class="n-button n-button--default-type n-button--medium-type n-button--ghost"
            v-if="isShow"
            :to="{name: `admin.${data.route}.show`, params: {id: data.row.id}}"
            :style="styles"
        >
            <n-icon size="18">
                <RemoveRedEyeOutlined />
            </n-icon>
            <div aria-hidden="true" class="n-base-wave"></div>
            <div aria-hidden="true" class="n-button__border"></div>
            <div aria-hidden="true" class="n-button__state-border"></div>
        </router-link>
        <router-link
            class="n-button n-button--default-type n-button--medium-type n-button--ghost"
            v-if="isEdit"
            :to="{name: `admin.${data.route}.edit`, params: {id: data.row.id}}"
            :style="styles"
        >
            <n-icon size="18">
                <ModeEditOutlined />
            </n-icon>
            <div aria-hidden="true" class="n-base-wave"></div>
            <div aria-hidden="true" class="n-button__border"></div>
            <div aria-hidden="true" class="n-button__state-border"></div>
        </router-link>
        <n-button v-if="isDelete" ghost @click="deleteEvent">
            <template #icon>
                <DeleteOutlineFilled />
            </template>
        </n-button>
    </n-button-group>
</template>

<script>
import {ModeEditOutlined, RemoveRedEyeOutlined, DeleteOutlineFilled} from '@vicons/material';

export default {
    name: "ButtonGroup",
    components: {ModeEditOutlined, RemoveRedEyeOutlined, DeleteOutlineFilled},
    props: {
        isShow: {
            type: Boolean,
            default: true
        },
        isEdit: {
            type: Boolean,
            default: true
        },
        isDelete: {
            type: Boolean,
            default: true
        },
        data: {
            type: Object,
            default: Object.prototype
        }
    },
    computed: {
        styles() {
            return `
                --n-bezier: cubic-bezier(0.4, 0, 0.2, 1);
                --n-bezier-ease-out: cubic-bezier(0, 0, 0.2, 1);
                --n-ripple-duration: 0.6s;
                --n-opacity-disabled: 0.5;
                --n-wave-opacity: 0.6;
                font-weight: 400;
                --n-color: #0000;
                --n-color-hover: #0000;
                --n-color-pressed: #0000;
                --n-color-focus: #0000;
                --n-color-disabled: #0000;
                --n-ripple-color: #18a058;
                --n-text-color: rgb(51, 54, 57);
                --n-text-color-hover: #36ad6a;
                --n-text-color-pressed: #0c7a43;
                --n-text-color-focus: #36ad6a;
                --n-text-color-disabled: rgb(51, 54, 57);
                --n-border: 1px solid rgb(224, 224, 230);
                --n-border-hover: 1px solid #36ad6a;
                --n-border-pressed: 1px solid #0c7a43;
                --n-border-focus: 1px solid #36ad6a;
                --n-border-disabled: 1px solid rgb(224, 224, 230);
                --n-width: initial;
                --n-height: 34px;
                --n-font-size: 14px;
                --n-padding: 0 14px;
                --n-icon-size: 18px;
                --n-icon-margin: 6px;
                --n-border-radius: 3px;
           `
        },
    },
    methods: {
        deleteEvent() {
            const {row, model, route} = this.data;
        },
    }
}
</script>
