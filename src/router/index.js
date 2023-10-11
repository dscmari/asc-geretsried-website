import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FirstTeamView from '../views/FirstTeamView.vue'
import SecondTeamView from '../views/SecondTeamView.vue'
import FutsalView from '../views/FutsalView.vue'
import BoardView from '../views/BoardView.vue'
import SponsorsView from '../views/SponsorsView.vue'
import HistoryView from '../views/HistoryView.vue'

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
    },
    {
      path: '/zweite-mannschaft',
      name: 'zweite-mannschaft',
      component: SecondTeamView
    },
    {
      path: '/futsal',
      name: 'futsal',
      component: FutsalView
    },
    {
      path: '/vorstandschaft',
      name: 'vorstandschaft',
      component: BoardView
    },
    {
      path: '/sponsoren',
      name: 'sponsoren',
      component: SponsorsView
    },
    {
      path: '/geschichte',
      name: 'geschichte',
      component: HistoryView
    }
  ]
})

export default router
