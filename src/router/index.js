import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FirstTeamView from '../views/FirstTeamView.vue'
import SecondTeamView from '../views/SecondTeamView.vue'
import FutsalView from '../views/FutsalView.vue'
import BoardView from '../views/BoardView.vue'
import SponsorsView from '../views/SponsorsView.vue'
import HistoryView from '../views/HistoryView.vue'
import NewMemberView from '../views/NewMemberView.vue'
import LivetickerView from '../views/LivetickerView.vue'
import ImpressumView from '../views/ImpressumView.vue'
import DatenschutzerklaerungView from '../views/DatenschutzerklaerungView.vue'
import SeniorTeamView from '../views/SeniorTeamView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to,from) {
    // Always scroll to the top of the page
    if (to.hash) {
      return {
        el: to.hash,
        top: 200,
        behavior: 'smooth',
      }
    }
    return { top: 0 };
  },
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
      path: '/vorstand',
      name: 'vorstand',
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
    },
    {
      path: '/mitglied-werden',
      name: 'mitglied-werden',
      component: NewMemberView
    },
    {
      path: '/liveticker',
      name: 'liveticker',
      component: LivetickerView
    },
    {
      path: '/impressum',
      name: 'impressum',
      component: ImpressumView
    },
    {
      path: '/datenschutzerklaerung',
      name: 'datenschutzerklaerung',
      component: DatenschutzerklaerungView
    },
    {
      path: '/alte-herren',
      name: 'alte-herren',
      component: SeniorTeamView
    },
    {
      path: '/:catchAll(.*)', // This catch-all route will match any URL
      component: NotFoundView,
    },
  ]
})

export default router
