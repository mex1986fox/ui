import Vue from 'vue/dist/vue.js';
import Router from 'vue-router';
import Grid from '../pages/grid.vue';
import Buttons from '../pages/buttons.vue';
import Typography from '../pages/typography.vue';
import Inputs from '../pages/inputs.vue';
import Selects from '../pages/selects.vue';
import CheckBoxs from '../pages/checkboxs.vue';
import DatePicker from '../pages/datepicker.vue';
import Chips from '../pages/chips.vue';
import Windows from '../pages/windows.vue';
import Hello from '../pages/hello.vue';
import Tabs from '../pages/tabs.vue';
import Registration from '../pages/registration.vue';
Vue.use(Router)
export default new Router({
    routes: [
        { path: '/', component: Hello },
        { path: '/grid', component: Grid },
        { path: '/buttons', component: Buttons },
        { path: '/typography', component: Typography },
        { path: '/inputs', component: Inputs },
        { path: '/selects', component: Selects },
        { path: '/checkboxs', component: CheckBoxs },
        { path: '/datepicker', component: DatePicker },
        { path: '/chips', component: Chips },
        { path: '/windows', component: Windows },
        { path: '/tabs', component: Tabs },

        { path: '/registration', component: Registration }
    ]
})