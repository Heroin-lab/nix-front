import { createRouter, createWebHistory } from 'vue-router'

import MainPage from "@/Pages/MainPage";
import ProductsPage from "@/Pages/PrdocutsPage"
import SuppliersPage from "@/Pages/SuppliersPage";
import BasketPage from "@/Pages/BasketPage";

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
