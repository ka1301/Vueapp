import { createApp } from 'vue'
import App from './App.vue'

import "./assets/main.css" //css 読み込み
import "./assets/page.css" //css 読み込み

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Info from './pages/Info.vue'
import Admin  from './pages/Admin.vue'
import Policy  from './pages/Policy.vue'
const routes = [
  { path: '/foo', component: Foo },
  { path: '/info', component: Info },
  { path: '/home', component: Home },
  { path: '/about', component: About },
  { path: '/admin', component: Admin},
  { path: '/policy', component: Policy},
  { path: '/Vueapp/about', component: About },
  { path: '/Vueapp/admin', component: Admin},
  { path: '/Vueapp/policy', component: Policy},
  { path: '/', component: Home }
]

//versoin3 の書き方
// import VueRouter from 'vue-router'
// const router = new VueRouter({
// 	  mode: 'history',
// 	routes,
// })
//versoin4 の書き方
import {createRouter, createWebHistory} from 'vue-router';
const router = createRouter({
  history: createWebHistory(),
  routes,
})


createApp(App)
.use(router)
.mount('#app')
// new Vue({
//   el: '#app',
//   components: { App },
//   router
// })