import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import FichaViewPadre from '../views/FichaViewPadre.vue'
import FichaViewPediatra from '../views/FichaViewPediatra.vue'

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
      path: '/fichaPadre',
      name: 'fichaPadre',
      component: FichaViewPadre
    },
    {
      path: '/fichaPediatra',
      name: 'fichaPediatra',
      component: FichaViewPediatra
    }
  ]
})

export default router
