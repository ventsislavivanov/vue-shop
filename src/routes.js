import home from './components/home.vue';
import about from './components/about.vue';
import products from './components/products.vue';
import contact from "./components/contact";

export default [
  {path:'/', component: home},
  {path:'/about', component: about},
  {path:'/products', component: products},
  {path:'/contact', component: contact},
]
