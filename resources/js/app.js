/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';
import App from './components/App';

window.Vue.use(VueRouter);

// Views
import CompaniesIndex from './components/companies/CompaniesIndex.vue';
import CompaniesCreate from './components/companies/CompaniesCreate.vue';
import CompaniesEdit from './components/companies/CompaniesEdit.vue';

import BLogIndex from './components/home/HomeIndex.vue';

import HomeView from './components/home/HomeView.vue'
import CategoryView from './components/home/CategoryView.vue'
import TopicView from './components/home/TopicView.vue'
import NotFound from './components/NotFound.vue'


const routes = [
    {
        path: '/',
        components: {
            companiesIndex: CompaniesIndex
        }
    },
    {path: '/admin/companies/create', component: CompaniesCreate, name: 'createCompany'},
    {path: '/admin/companies/edit/:id', component: CompaniesEdit, name: 'editCompany'},
    {
    	path: '/admin/blog/index',
    	components: {
    		blogIndex: BLogIndex},
    },
    { path: '/homeview', name: 'Home', component: HomeView },
    { path: '/category', name: 'Category', component: CategoryView },
    { path: '/topic', name: 'Topci', component: TopicView },
    { path: '*', component: NotFound }
]

const router = new VueRouter({ routes })

const app = new Vue({ router }).$mount('#app')