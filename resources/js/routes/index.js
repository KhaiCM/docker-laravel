import Vue from 'vue'
import Router from 'vue-router'

// Views
import CompaniesIndex from './components/companies/CompaniesIndex.vue';
import CompaniesCreate from './components/companies/CompaniesCreate.vue';
import CompaniesEdit from './components/companies/CompaniesEdit.vue';

import BLogIndex from './components/home/HomeIndex.vue';

import HomeView from './components/home/HomeView.vue'
import CategoryView from './components/home/CategoryView.vue'
import TopicView from './components/home/TopicView.vue'


Vue.use(Router)

export default new Router({
  routes: [
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
    ],
    mode:'history'
})
