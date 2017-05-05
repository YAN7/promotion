import Vue from 'vue';
import Vonic from 'vonic';
import VueRouter from 'vue-router'

import routes from './routes';
import * as WxSdk from './utils/wechat';

Vue.use(VueRouter);
Vue.prototype.WxSdk = WxSdk;

const router = new VueRouter({
    routes: routes
});

console.log(router);
// router.beforeEach((to, from, next) => {
//   console.log(123);
//   next();
// })

Vue.use(Vonic.app, {
  routes: routes
})
