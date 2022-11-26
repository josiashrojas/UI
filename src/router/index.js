import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import FichaView from '../views/FichaView.vue'
import MenuPrincipalPadreView from '../views/MenuPrincipalPadreView.vue'
import BuscarPacienteView from '../views/BuscarPacienteView.vue'

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
      path: '/padre',
      name: 'padre',
      component: MenuPrincipalPadreView
    },
    {
      path: '/buscar',
      name: 'buscar',
      component: BuscarPacienteView
    },

  ]
})

export default router
