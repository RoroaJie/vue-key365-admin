import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'


//404
import NOtfound from './views/Notfound.vue'
//Login
import Login from './views/Admin/Login.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/*',
      redirect: {
        name: 'nontfound',
        component: NOtfound
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
