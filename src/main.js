import Vue from 'vue'
import Vonic from 'vonic'

// Page Components
import Index from './view/Index.vue'
import About from './view/About.vue'
import Personal from './view/personal.vue'
import InStore from './view/inStore.vue'
import shareRule from './view/shareRule.vue'

// Routes
const routes = [
  { path: '/', component: Index },
  { path: '/about', component: About },
  { path: '/personal', component: Personal },
  { path: '/InStore', component: InStore },
  { path: '/shareRule', component: shareRule },
]

Vue.use(Vonic.app, {
  routes: routes
})
