import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import FichaView from '../views/FichaView.vue'
import GraficosView from '../views/GraficosView.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/ficha',
      name: 'ficha',
      component: FichaView
    },

    {
      path: '/graficos',
      name: 'graficos',
      component: GraficosView
    }
  ]
})

export default router
