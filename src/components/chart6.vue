<template>
	<div class="chart2">
		<p>年薪</p>
		<Bar :chart-data="chartData" class="BarChart2" />
	</div>
</template>
<script>
import { Bar } from "vue-chartjs";
import {
	Chart as ChartJS,
	Title,
	Tooltip,
	Legend,
	BarElement,
	CategoryScale,
	LinearScale,
} from "chart.js";

ChartJS.register(
	Title,
	Tooltip,
	Legend,
	BarElement,
	CategoryScale,
	LinearScale
);

export default {
	name: "BarChart",
	components: { Bar },
	data() {
		return {
			chartData: this.$store.state.chartData6,
		};
	},
};
</script>
<style scoped>
.chart2 {
	margin-right: 15px;
	background-color: #080231;
	position: relative;
}
.BarChart2 {
	width: 800px;
	height: 430px;
	margin-top: 100px;
}
.chart2 p {
	color: aliceblue;
	font-size: 30px;
	font-weight: bold;
	position: absolute;
	top: 40px;
	left: 380px;
}
</style>
