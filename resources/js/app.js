require('./bootstrap');

window.Vue = require('vue');

import router from './router';

Vue.component('main-app',require('./component/main.vue').default);

const app = new Vue({
    el: '#app',
    router

})
