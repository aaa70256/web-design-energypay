<template>
	<div id="app">
		<Header />
		<Content />
		<Footer />
	</div>
</template>

<script>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
import Content from "@/components/content.vue";

export default {
	name: "App",
	components: {
		Header,
		Footer,
		Content,
	},
};
</script>

<style src="@/assets/reset.css">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
