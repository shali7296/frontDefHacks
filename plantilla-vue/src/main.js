import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from './Index.vue';
import ListPerson from './ListPerson.vue';
import Hello from './Hello.vue';
import VueResource from 'vue-resource';
import InicioSesion from './InicioSesion.vue';
<<<<<<< HEAD

=======
import VModal from 'vue-js-modal'

Vue.use(VModal)
>>>>>>> 44276b4e1cfa1717c63d1fb57636dad7b6b98294
require("./style.scss");

import App from './App.vue';
Vue.use(VueRouter);
Vue.use(VueResource);
const routes = [
  { path: '/index', alias: '/', component: Index},
  { path:'/listPerson', component: ListPerson}, 
  { path:'/hello', component: Hello},
  { path: '/inicioSesion', component: InicioSesion},


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
