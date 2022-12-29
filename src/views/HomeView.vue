<template>
	<div class="home">
		<div class="content-part2">
			<BarChart />
			<BarChart2 />
			<BarChart4 class="BarChart4" />
			<BarChart3 class="BarChart4" />
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import BarChart from "@/components/chart.vue";
import BarChart2 from "@/components/chart2.vue";
import BarChart3 from "@/components/chart3.vue";
import BarChart4 from "@/components/chart4.vue";
export default {
	name: "HomeView",
	components: { BarChart, BarChart2, BarChart3, BarChart4 },
};
</script>
<style scoped>
.content-part2 {
	margin-top: 50px;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
}
.BarChart4 {
	margin-top: 20px;
}
</style>
