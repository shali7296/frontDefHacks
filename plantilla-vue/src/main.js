import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from './Index.vue';
import ListPerson from './ListPerson.vue';
import VueResource from 'vue-resource';
import InicioSesion from './InicioSesion.vue';
import VModal from 'vue-js-modal'

Vue.use(VModal)
require("./style.scss");

import App from './App.vue';
Vue.use(VueRouter);
Vue.use(VueResource);
const routes = [
  { path: '/index', alias: '/', component: Index},
  { path:'/listPerson', component: ListPerson}, 
  { path: '/inicioSesion', component: InicioSesion}
]

// Create the router instance and pass the `routes` option
const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
