import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { createPinia } from 'pinia';
import './styles/index.css';
import naive, { NThemeEditor } from 'naive-ui';

const pinia = createPinia();
const app = createApp(App);
app
    .use(store)
    .use(pinia)
    .use(router)
    .use(naive)
    .component('NThemeEditor', NThemeEditor)
    .mount('#app')
;
