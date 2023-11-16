import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import products from '../views/products.vue'
import login from '../views/login.vue'
import register from '../views/register.vue'
import admin from '../views/admin.vue'
 
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
    {
      path: '/admin',
      name: 'admin',
      component: admin 
   
    },
  ],
  state: {
    token: null,
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
  },
  getters: {
    getToken: (state) => state.token,
  },
})
 
export default router
