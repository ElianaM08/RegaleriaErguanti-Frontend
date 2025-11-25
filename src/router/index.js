import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import ProductListView from '@/views/Products/ProductListView.vue'
import LoginView from '@/views/Auth/LoginView.vue'
import PurchaseListView from '@/views/Purchase/PurchaseListView.vue'
import RegisterView from '@/views/Auth/RegisterView.vue'
import ProductAdminView from '@/views/Products/ProductAdminView.vue'
import ProductDetailView from '@/views/Products/ProductDetailView.vue'
import PurchaseCreateView from '@/views/Purchase/PurchaseCreateView.vue'
import StatisticView from '@/views/StatisticView.vue'
import { useAuthStore } from '@/stores/AuthStore'

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
      path: "/products/:id",
      name: "product-detail",
      component: ProductDetailView,
      props: true,
    },
    {
      path: "/admin/products",
      name: "admin-products",
      component: ProductAdminView,
      meta: { requiresAdmin: true },
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
      path: "/admin/purchase",
      name: "admin-purchase",
      component: PurchaseCreateView,
      meta: { requireAdmin: true }
    },
    {
      path: "/admin/statistics",
      name: "Statistic",
      component: StatisticView,
      meta: { requireAdmin: true},
        beforeEnter: (to, from, next) => {
         const auth = useAuthStore();
          if (!auth.isAuthenticated || !auth.isAdmin) return next("/");
        next();
  }
    }


  ],
})

export default router
