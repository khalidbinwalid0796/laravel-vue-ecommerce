require('./bootstrap');

window.Vue = require('vue');
import Vue from 'vue' //ai line na dile Vue.component is not a function error dekhai

Vue.component('admin-master', require('./components/Admin/AdminMaster.vue').default);

import router from './admin/routers'
//store support for vuex
import {store} from './common/store/store'

const app = new Vue({
    el: '#admin',
    router,
    store
});
