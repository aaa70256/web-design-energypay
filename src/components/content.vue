<template>
	<div class="content">
		<h1>前端薪資調查表</h1>
		<div class="Link">
			<router-link to="/" class="pageOne">基本資料</router-link>
			<router-link to="/about" class="pageTwo">薪資與產業</router-link>
		</div>
		<router-view />
	</div>
</template>
<script></script>
<style>
.content {
	margin-top: 100px;
	margin-bottom: 100px;
}
.content h1 {
	font-size: 45px;
	color: white;
	font-weight: bold;
	text-align: center;
}
.Link {
	margin-top: 15px;
	text-align: center;
}
.pageOne,
.pageTwo {
	font-size: 30px;
	color: yellow;
	font-weight: bold;
	margin: 10px;
}
.pageOne:hover,
.pageTwo:hover {
	color: red;
}
.pageOne:focus,
.pageTwo:focus {
	color: pink;
}
</style>
