<template>
	<div class="chart2">
		<p>年紀</p>
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
			chartData: this.$store.state.chartData2,
		};
	},
};
</script>
<style scoped>
.chart2 {
	width: 530px;
	height: 450px;
	margin-right: 15px;
	background-color: #080231;
	position: relative;
}
.BarChart2 {
	margin-top: 20%;
}
.chart2 p {
	color: aliceblue;
	font-size: 30px;
	font-weight: bold;
	position: absolute;
	top: 40px;
	left: 250px;
}
</style>
