import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FirstTeamView from '../views/FirstTeamView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/erste-mannschaft',
      name: 'erste-mannschaft',
      component: FirstTeamView
    }
  ]
})

export default router
