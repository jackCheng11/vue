import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Support from '../views/Support.vue'
import Blog from '../views/Blog.vue'
import Infomation from '../views/Infomation.vue'
import Mine from '../views/Mine.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/support',
    name: 'Support',
    component: Support
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/infomation',
    name: 'Infomation',
    component: Infomation
  },
  {
      path: "/mine",
      name: "Mine",
      component: Mine
  }
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
