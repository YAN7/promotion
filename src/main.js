import Vue from 'vue'
import Vonic from 'vonic'

// Page Components
import Index from './components/Index.vue'
import About from './components/About.vue'
import Personal from './components/personal.vue'
import InStore from './components/inStore.vue'

// Routes
const routes = [
  { path: '/', component: Index },
  { path: '/about', component: About },
  { path: '/personal', component: Personal },
  { path: '/InStore', component: InStore },
]

Vue.use(Vonic.app, {
  routes: routes
})
