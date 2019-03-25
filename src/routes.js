import home from './views/home.vue';
import about from './views/about.vue';
import products from './views/products.vue';
import contact from "./views/contact";

export default [
  {path:'/', component: home},
  {path:'/about', component: about},
  {path:'/products', component: products},
  {path:'/contact', component: contact},
]
