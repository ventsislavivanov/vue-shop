import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import Paginate from 'vuejs-paginate'

//Packages
Vue.use(VueRouter);

//Register Components
Vue.component('paginate', Paginate);

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
  methods: {
    clickCallback: function(pageNum) {
      console.log(pageNum)
    }
  }
});
