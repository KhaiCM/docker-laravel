/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
require('./frontend/js/clean-blog.js');
require('./frontend/js/clean-blog.min.js');
require('./frontend/js/contact_me.js');
require('./frontend/js/jqBootstrapValidation.js');

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

import VatoHome from './components/blogs/HomeView.vue';
import VatoBlogDetail from './components/blogs/BlogDetail.vue';
import VatoBlogCreate from './components/blogs/CRUD/create.vue';
import VatoBlogEdit from './components/blogs/CRUD/edit.vue';
import VatoBlogCreateCategory from './components/blogs/category/create.vue';
import VatoBlogEditCategory from './components/blogs/category/edit.vue';
import VatoBlogIndexCategory from './components/blogs/category/index.vue';


const router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/companies',
            components: {
                companiesIndex: CompaniesIndex
            }
        },
        {
            path: '/admin/companies/create',
            component: CompaniesCreate,
            name: 'createCompany'
        },
        {
            path: '/admin/companies/edit/:id',
            component: CompaniesEdit,
            name: 'editCompany'
        },
        {
            path: '/admin/blog/index',
            components: {
                blogIndex: BLogIndex
            },
        },
        {
            path: '/homeview',
            name: 'Home',
            component: HomeView
        },
        {
            path: '/category/:categoryId',
            name: 'Category',
            component: CategoryView
        },
        {
            path: '/topic',
            name: 'Topic',
            component: TopicView
        },
        {
            path: '/vatohome',
            name: 'Vato',
            component: VatoHome
        },
        {
            path: '/vatoblogdetail',
            name: 'BlogDeatil',
            component: VatoBlogDetail
        },
        {
            path: '/vatoblog/create',
            name: 'BlogCreate',
            component: VatoBlogCreate
        },
        {
            path: '/vatoblog/edit',
            name: 'BlogEdit',
            component: VatoBlogEdit
        },
        {
            path: '/vatoblog/indexcategory',
            name: 'BlogIndexCategory',
            component: VatoBlogIndexCategory
        },
        {
            path: '/vatoblog/createcategory',
            name: 'BlogCreateCategory',
            component: VatoBlogCreateCategory
        },
        {
            path: '/vatoblog/editcategory',
            name: 'BlogEditCategory',
            component: VatoBlogEditCategory
        },
        {
            path: '/test',
            component: NotFound
        }
    ]
})

const app = new Vue({ router }).$mount('#app')
