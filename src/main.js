// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui'
import swal from 'sweetalert'
import Cookies from './assets/js/cookie'
import _g from './assets/js/global'
import store from './vuex/store'
import moment from 'moment';
import filter from './assets/js/filter'
import {i18n, vueI18n} from './lang/lang'
import echarts from 'echarts'
import VueDraggableResizable from 'vue-draggable-resizable'
import formCreate from '@form-create/element-ui'

import 'vue-draggable-resizable/dist/VueDraggableResizable.css'

Vue.component('vue-draggable-resizable', VueDraggableResizable)

import {cancelArr} from "./assets/js/baseApi"

import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.css'
import './assets/css/base.scss';
import './assets/css/global.scss';
import './assets/css/xterm.scss';

Vue.prototype.$echarts = echarts;
Vue.prototype.$swal = swal;
Vue.prototype.$moment = moment

window.cookie = Cookies;
window._g = _g;
window.store = store;
window.filter = filter;

Vue.use(ElementUI)
Vue.use(formCreate)

vueI18n(Vue)

router.beforeEach((to, from, next) => {
    while(cancelArr.length>0){
        cancelArr.shift().cancel();
    }
    
    next();
})
//fixed Loading chunk error

// router.onError((error) => {
//     const pattern = /Loading chunk (\d)+ failed/g;
//     const isChunkLoadFailed = error.message.match(pattern);
//     const targetPath = router.history.pending.fullPath;
//     if (isChunkLoadFailed) {
//         router.replace(targetPath);
//     }
// });

/* eslint-disable no-new */
let vueMain = new Vue({
    el: '#app',
    router,
    store,
    filter,
    i18n,
    template: '<router-view></router-view>'
})

export default vueMain
