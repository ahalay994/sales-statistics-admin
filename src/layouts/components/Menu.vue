<template>
    <n-menu
        :collapsed-width="collapsedWidth"
        :collapsed-icon-size="collapsedIconSize"
        :options="menuOptions"
    />
</template>

<script>
import {h} from "vue";
import {RouterLink} from "vue-router";
import {NIcon} from "naive-ui";
import {LibraryBooksOutlined} from "@vicons/material";

function renderIcon(icon) {
    return () => h(NIcon, null, {default: () => h(icon)});
}

const menuOptions = [
    {
        label: () => h(RouterLink, {
            to: {
                name: "admin.dashboard",
            }
        }, {default: () => "Dashboard"}),
        key: "admin.dashboard",
        icon: renderIcon(LibraryBooksOutlined)
    },
    {
        label: "Пользователи",
        key: "users",
        icon: renderIcon(LibraryBooksOutlined),
        children: [
            {
                label: () => h(RouterLink, {
                    to: {
                        name: "admin.users",
                    }
                }, {default: () => "Пользователи"}),
                key: "users"
            },
            {
                label: () => h(RouterLink, {
                    to: {
                        name: "admin.access",
                    }
                }, {default: () => "Роли"}),
                key: "users.access"
            },
            {
                label: "Типы дня",
                key: "users.typeDays"
            },
            {
                label: "Календарь",
                key: "users.calendar"
            },
            {
                label: "Продажи",
                key: "users.sales",
            },
        ]
    },
    {
        label: "Продукция",
        key: "products",
        icon: renderIcon(LibraryBooksOutlined),
        children: [
            {
                label: "Категории",
                key: "products.categories",
            },
            {
                label: "Метки",
                key: "products.tags",
            },
            {
                label: "Продукция",
                key: "products",
            },
            {
                label: "Характеристики",
                key: "products.characteristics",
            },
        ]
    },
    {
        label: "Магазины",
        key: "shops",
        icon: renderIcon(LibraryBooksOutlined),
        children: [
            {
                label: "Магазины",
                key: "shops",
            },
            {
                label: "Наличие",
                key: "shops.stock",
            },
            {
                label: "Продажи",
                key: "shops.sales",
            },
        ]
    }
];

export default {
    name: "Menu",
    props: {
        collapsedWidth: {
            type: Number,
            default: 64
        },
        collapsedIconSize: {
            type: Number,
            default: 22
        },
    },
    setup() {
        return {
            menuOptions
        }
    }
}
</script>
