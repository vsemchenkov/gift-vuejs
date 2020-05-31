import Vue from 'vue'
import Vuex from 'vuex';
import App from './App.vue'
import VueRouter from 'vue-router'
import MainPage from "./components/layouts/MainPage";
import CatalogPage from "./components/layouts/CatalogPage"

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false

Vue.use(Vuex);
Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: MainPage },
    { path: '/catalog', component: CatalogPage }
  ]
})

new Vue({
  render: h => h(App),
  router,
  data () {
    return {
      products: [
        { id: 1, img: '', name: 'Product 1', description: 'Description 1', quantity: 0, catalog: 'hello' },
        { id: 2, img: '', name: 'Product 2', description: 'Description 2', quantity: 0, catalog: 'hello' },
        { id: 3, img: '', name: 'Product 3', description: 'Description 3', quantity: 0, catalog: 'hello' },
    ],
    showCart: false}
  }
}).$mount('#app')
