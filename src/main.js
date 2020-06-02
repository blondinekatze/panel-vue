import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';


import IdleJs from "idle-js";
import { IDLE_TIME } from "./utils/constants";

import IconTemplate from '@/components/IconTemplate';

Vue.config.productionTip = false;

import '@/vendor/element-ui';

import '@/styles/main.scss';

Vue.component('IconTemplate', IconTemplate);
let requireAll = requireContext => requireContext.keys().map(requireContext);
requireAll(require.context('@/assets/icons/', true, /\.svg$/));

Vue.prototype.$idle = new IdleJs({
    idle: IDLE_TIME,
    onIdle: () => {
        router.push({ name: 'Idle' });
    },
});

axios.defaults.baseURL = 'http://panel-vue.1gt.ru:3000/';

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app');
