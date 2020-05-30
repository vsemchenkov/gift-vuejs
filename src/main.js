import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import MainPage from "./components/layouts/MainPage";
import CatalogPage from "./components/layouts/CatalogPage";

Vue.config.productionTip = false

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
  router
}).$mount('#app')
