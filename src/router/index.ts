import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import StartForm from '../views/StartForm.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/StartForm'
  },
  {
    path: '/StartForm',
    name: 'Form',
    component: StartForm
  },
  {
    path: '/ProblemBase/:cv/:cr',
    name: 'Base',
    component: () => import('@/views/SimplexProblem.vue'),
    beforeEnter: (val, from, next) => {
      const cv = parseInt(val.params.cv.toString())
      const cr = parseInt(val.params.cr.toString())
      if(isNaN(cv) || isNaN(cr) || cv < 2 || cv > 10 || cr < 2 || cr > 10){
        next('/')
      } else {
        next()
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
