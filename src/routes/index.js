import setWechatTitle from './../utils/setWechatTitle';

import Index from './../view/Index.vue'
import Personal from './../view/personal.vue'
import InStore from './../view/inStore.vue'
import shareRule from './../view/shareRule.vue'
import register from './../view/register.vue'
import loginReturn from './../view/loginReturn.vue'
import applyStore from './../view/applyStore.vue'


const routes = [
  {
     path: '/',
     component: Index,
     beforeEnter: (to, from, next)=> {
       setWechatTitle("医美莱推广")
       next();
     }
  },
  {
    path: '/personal',
    component: Personal,
    beforeEnter: (to, from, next)=> {
      setWechatTitle("我的推荐")
      next();
    }
  },
  {
    path: '/InStore',
    component: InStore,
    beforeEnter: (to, from, next)=> {
      setWechatTitle("我的推荐")
      next();
    }
  },
  {
    path: '/shareRule',
    component: shareRule,
    beforeEnter: (to, from, next)=> {
      setWechatTitle("分享规则")
      next();
    }
  },
  {
    path: '/register',
    component: register,
    beforeEnter: (to, from, next)=> {
      setWechatTitle("注册医美莱")
      next();
    }
  },
  {
    path: '/loginReturn',
    component: loginReturn,
    beforeEnter: (to, from, next)=> {
      setWechatTitle("医美莱")
      next();
    }
  },
  {
    path: '/applyStore',
    component: applyStore,
    beforeEnter: (to, from, next)=> {
      setWechatTitle("申请入驻医美店")
      next();
    }
  },
]

export default routes;
