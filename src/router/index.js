import MissionView from '@/views/about/MissionView.vue'
import TeamsView from '@/views/about/TeamsView.vue'
import CaseView from '@/views/CaseView.vue'
import ContactView from '@/views/ContactView.vue'
import HomeView from '@/views/HomeView.vue'
import PricingView from '@/views/pricingView.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about/mission',
      name: 'mission',
      component: MissionView
    },
    {
      path: '/about/teams',
      name: 'teams',
      component: TeamsView
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: PricingView
    },
    {
      path: '/case',
      name: 'case',
      component: CaseView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
  ],
})

export default router
