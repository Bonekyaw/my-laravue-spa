import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import firstPage from './component/pages/myFirstPage.vue';
import secondPage from './component/pages/secondPage.vue';

const routes = [
    {
        path: '/first',
        component: firstPage
    },
    {
        path: '/second',
        component: secondPage
    }
]

export default new Router({
    mode: 'history',
    routes
});