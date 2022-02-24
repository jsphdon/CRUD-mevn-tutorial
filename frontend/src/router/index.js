import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddPost from '../views/AddPost.vue'
import EditPost from '../views/EditPost.vue'
import Post from '../views/Post.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/post/:id',
    name: 'post',
    component: Post,
  },
  {
    path: '/add-post',
    name: 'add-post',
    component: AddPost,
  },
  {
    path: '/edit-post/:id',
    name: 'edit-post',
    component: EditPost,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
