import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MineNowView from '@/views/MineNowView.vue'
import ARView from '@/views/ARView.vue'
import GalleryView from '@/views/GalleryView.vue'
import BLSView from '@/views/BLSView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/MineNow',
      name: 'Mine Now!',
      component: MineNowView,
    },
    {
      path: '/BLS',
      name: 'B.L.S.',
      component: BLSView,
    },
    {
      path: '/CaseCompanion',
      name: 'Case Companion',
      component: ARView,
    },
    {
      path: '/Gallery',
      name: 'gallery',
      component: GalleryView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
