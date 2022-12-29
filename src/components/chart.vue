<template>
	<div class="chart1">
		<p>地區</p>
		<Bar :chart-data="chartData" class="BarChart1" />
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
			chartData: this.$store.state.chartData,
		};
	},
};
</script>
<style scoped>
.chart1 {
	width: 530px;
	height: 450px;
	margin-right: 15px;
	background-color: #080231;
	position: relative;
}
.BarChart1 {
	margin-top: 20%;
}
.chart1 p {
	color: aliceblue;
	font-size: 30px;
	font-weight: bold;
	position: absolute;
	top: 40px;
	left: 250px;
}
</style>
