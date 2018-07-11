import Vue from 'vue/dist/vue.js'
import Router from 'vue-router'
import Grid from '../pages/grid.vue'
import Buttons from '../pages/buttons.vue'
import Typography from '../pages/typography.vue'
import Inputs from '../pages/inputs.vue'

Vue.use(Router)
export default new Router({
  routes: [
    { path: '/grid', component: Grid },
    { path: '/buttons', component: Buttons },
    { path: '/typography', component: Typography },
    {path:'/inputs', component: Inputs}
  ]
})
