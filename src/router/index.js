import Vue from 'vue'
import Router from 'vue-router'
import test from '../pages/test.vue'

Vue.use(Router)
export default new Router({
  routes: [
    { path: '/ui', component: test },
  ]
})
