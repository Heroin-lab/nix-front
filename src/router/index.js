import { createRouter, createWebHistory } from 'vue-router'

import MainPage from "@/pages/MainPage";
import ProductsPage from "@/pages/PrdocutsPage"
import SuppliersPage from "@/pages/SuppliersPage";
import BasketPage from "@/pages/BasketPage";

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
  },
  {
    path: '/products',
    name: 'ProductsPage',
    component: ProductsPage,
  },
  {
    path: '/suppliers',
    name: 'Suppliers',
    component: SuppliersPage,
  },
  {
    path: '/basket',
    name: 'Basket',
    component: BasketPage,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
