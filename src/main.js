import { createApp } from 'vue'
import App from './App.vue'

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Info from './pages/Info.vue'
const routes = [
  { path: '/foo', component: Foo },
  { path: '/info', component: Info },
  { path: '/home', component: Home },
  { path: '/about', component: About },
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