import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import ProductListView from '@/views/Products/ProductListView.vue'
import LoginView from '@/views/Auth/LoginView.vue'
import PurchaseListView from '@/views/Purchase/PurchaseListView.vue'
import PurchaseCreateView from '@/views/Purchase/PurchaseCreateView.vue'
import RegisterView from '@/views/Auth/RegisterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
        {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
        {
      path: '/products',
      name: 'product',
      component: ProductListView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
        {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/purchase',
      name: 'purchase',
      component: PurchaseListView,
    },
    {
      path: '/purchase/create',
      name: 'purchaseCreate',
      component: PurchaseCreateView,
    },

  ],
})

export default router
