<template>
	<div>


		<div>
			<h4 class="page__title mb-5 ">あおもり物流の歴史</h4>
		</div>


		<div class="about__table" >
				<table border="1" class="about__table__bg"  cellspacing="1">
					<tr v-for="item in items" class="about__table__item">
						
						<!-- 年数 -->
						<th class=""><strong class="item_s">{{ item.year }}年</strong></th>
						<!-- 事業内容 -->
						<td><p class="item_s">{{ item.message }}</p></td>

					</tr>
				</table>
		</div>

<div id="title">
	counter: {{ msg }}
	counter: {{ title }}
	counter: {{ items.item1 }}
</div>

<!-- 予備のリスト -->
<!-- <ul id="array-rendering">
  <li v-for="item in items">
    {{ item.year }}
    {{ item.message }}
  </li>
</ul> -->

	</div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  data(){
    return {
      msg:'Hello TypeScript',
			title: 'こんにちは世界',
      items: [
				{ year: '1994' ,message: 'パチンコに隣接する空き地を駐dsdsd車場にして運営開始' }, 
				{ year: '1994' ,message: 'パチンコに隣接する空き地を駐車場にして運営開始' },
				{ year: '1994' ,message: 'パチンコに隣接する空き地を駐車場にして運営開始' }, 
				{ year: '1994' ,message: 'パチンコに隣接する空き地を駐車場にして運営開始' },
				{ year: '1994' ,message: 'パチンコに隣接する空き地を駐車場にして運営開始' }, 
				{ year: '1994' ,message: 'パチンコに隣接する空き地を駐車場にして運営開始' }
			]
    }},
});

</script>
<style>
.about__table{
	text-align: left;
	/* margen:auto; */
}
.about__table{
    margin-left: auto;
    margin-right: auto;
    width: 600px;
}
.about__table__item{
	margen-top: 50px;
	padding: 30px;
	height: 50px;
}
.about__table__bg{
	 width: 100%;
}
.item_s{
	/* background-color:gray; */
  margin: 15px;
	/* padding:15px; */
}
</style>