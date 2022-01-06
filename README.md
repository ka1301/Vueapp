# Vue.js

This is the Template Repl for Vue.js.

Vue.js is a library for building user interfaces in JavaScript. This template uses Vite to serve your app.

[Check out the official docs here](https://vuejs.org/).

[https://ka1301.github.io/](https://ka1301.github.io/).

コマンドでアプリを作成。
Vue　Version"3.4.5"

yarn add vue-router@4 でRouterをインストール
この時、vue-router versionが4以上であることに注意
Vertionが3だと動かない

App.vueにて
Router-view は App.vueの中に書く



//versoin3 の書き方
import VueRouter from 'vue-router'
  const router = new VueRouter({
 	mode: 'history',
	routes,
})
//versoin4 の書き方
import {createRouter, createWebHistory} from 'vue-router';
const router = createRouter({
  history: createWebHistory(),
  routes,
})