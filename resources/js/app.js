/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
// require('./frontend/js/isotope.min');
// require('./frontend/js/jquery.countdown.min');
// require('./frontend/js/jquery.flexslider-min');
// require('./frontend/js/jquery.min');
// require('./frontend/js/jquery.plugin.min');
// require('./frontend/js/lightbox.min');
// require('./frontend/js/modernizr-2.6.2-respond-1.1.0.min');
// require('./frontend/js/scripts');
// require('./frontend/js/scrollReveal.min');
// require('./frontend/js/skrollr.min');
// require('./frontend/js/smooth-scroll.min');
// require('./frontend/js/spectragram.min');
// require('./frontend/js/twitterFetcher_v10_min');

window.Vue = require('vue');
import VueRouter from 'vue-router';
import App from './components/App';
import fromNow from './filters/timeFilter';
import largeNumber from './filters/largeNumber'

window.Vue.use(VueRouter);
window.Vue.filter('fromNow', fromNow);
window.Vue.filter('largeNumber', largeNumber);

// Views
import CompaniesIndex from './components/companies/CompaniesIndex.vue';
import CompaniesCreate from './components/companies/CompaniesCreate.vue';
import CompaniesEdit from './components/companies/CompaniesEdit.vue';

import BLogIndex from './components/home/HomeIndex.vue';

import HomeView from './components/home/HomeView.vue'
import CategoryView from './components/home/CategoryView.vue'
import TopicView from './components/home/TopicView.vue'
import NotFound from './components/NotFound.vue'
//blog
import BlogHome from './components/blogs/HomeIndex.vue'


const routes = [
    {
        path: '/companies',
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
    { path: '/category/:categoryId', name: 'Category', component: CategoryView },
    { path: '/topic', name: 'Topic', component: TopicView },
    { path: '*', component: NotFound },
    //blog
    { path: '/home', name: 'Vato', component: BlogHome}
]

const router = new VueRouter({ routes })

const app = new Vue({ router }).$mount('#app')