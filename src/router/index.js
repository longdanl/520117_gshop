/**
 * Created by Administrator on 2019/4/1.
 */
//对象路由器模块
import Vue from "vue"
import VueRouter from "vue-router"
import MSite from "../pages/MSite/MSite.vue"
import Search from "../pages/Search/Search.vue"
import Order from "../pages/Order/Order.vue"
import Profile from "../pages/Profile/Profile.vue"
import Login from "../pages/Login/Login.vue"
Vue.use(VueRouter)
export default new VueRouter({//传配置对象，配置路由//路由组件映射成路由，路由映射成标签
  routes:[
    {
      path:"/msite",
      component:MSite,
      meta:{
        showFooter:true//是否显示footer
      }
    },
    {
      path:"/search",
      component:Search,
      meta: {
        showFooter: true
      }
    },
    {
      path:"/order",
      component:Order,
      meta: {
        showFooter: true
      }
    },
    {
      path:"/profile",
      component:Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path:"/",
      redirect:"./msite"//默认显示页面
    },
    {
      path: "/login",
      component: Login
    }
  ]
})
