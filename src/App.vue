<template>

  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
	<!-- <Header /> -->


	<div class="row m-0 p-0">
    <div class="col ">
			
				<!--サイドバー -->
				<div id="Bc_Sidebar">
					<Sidebar />
				</div>
				

    </div>
    <div class="col-9 m-0 p-0">

			<!-- メインページ -->
			<div id="main">
				<router-view></router-view>
			</div>
			
    </div>
  </div>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

#app{
	height: 100%;
}
.col{
  background-color:gainsboro;
	height: 100%;
}
.row{
	height: 100%;
	margin:0px;
}
div{
	margin: 0px;
	padding: 0px;
}
.col-9{
	margin: 0px;
}
</style>