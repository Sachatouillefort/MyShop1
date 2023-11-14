import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import products from '../views/products.vue'
import login from '../views/login.vue'
import register from '../views/register.vue'
 
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/products',
      name: 'products',
      component: products 
    },
    {
      path: '/login',
      name: 'login',
      component: login 
    },
    {
      path: '/register',
      name: 'register',
      component: register 
    },
  ]
})
 
export default router
