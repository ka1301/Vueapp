<template>
<div id="sidebar">
		<ul>
			<li><router-link to="./">ホーム</router-link></li>
			<li><router-link to="./home">サービスについて（仮）</router-link></li>
			<li><router-link to="./policy">利用規約</router-link> </li>
			<li> <router-link to="./about">会社概要</router-link></li>
			<li> <router-link to="./admin">管理者</router-link></li>
			<li> <router-link to="./info">お問い合わせ	</router-link></li>
		</ul>
</div>
</template>

<script>
</script>
<style>
#sidebar{
	padding: 30px;
}
li{
	padding-top: 25px;
	font-size: 20px;
}
</style>