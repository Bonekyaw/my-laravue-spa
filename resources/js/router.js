import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import firstPage from './component/pages/myFirstPage.vue';
import secondPage from './component/pages/secondPage.vue';
//Project Page
import home from './component/pages/home';
import tags from './component/pages/tags';

const routes = [
    //Project Route
    {
        path: '/',
        component: home
    },
    {
        path: '/tags',
        component: tags
    },




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