import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

//获取原型对象上的push函数
// const originalPush = Router.prototype.push
//修改原型对象中的push方法
// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }
const originalReplace = Router.prototype.replace
Router.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err)
}


const routes = [{
    path: '',
    redirect: '/home',
  },
  {
    path: '/home',
    component: () => import( /* webpackChunkName: "about" */ '../views/home/Home.vue')
  },
  {
    path: "/category",
    component: () => import( /* webpackChunkName: "about" */ '../views/category/Category.vue')
  },
  {
    path: "/cart",
    component: () => import( /* webpackChunkName: "about" */ '../views/cart/Cart.vue')
  },
  {
    path: "/profile",
    component: () => import( /* webpackChunkName: "about" */ '../views/profile/Profile.vue')
  },
  {
    path: "/detail/:iid",
    component: () => import( /* webpackChunkName: "about" */ '../views/detail/Detail.vue')
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
