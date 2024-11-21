import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'
import AboutPage from '../page/AboutPage.vue'
import HomePage from '../page/HomePage.vue'
import SinhVienPage from '../page/SinhVienPage.vue'
const a = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/about1',
    name: 'AbooutPage',
    component: AboutPage,
  },
  {
    path: '/sinh-vien',
    name: 'SinhVienPage',
    component: SinhVienPage,
  },
]
const route = createRouter({
  // history: createMemoryHistory(), // nho path de hien thi
  history: createWebHistory(),
  routes: a,
})

export default route
