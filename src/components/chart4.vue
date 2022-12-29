<template>
	<div class="chart4">
		<p>性別比例</p>
		<Pie :chart-data="chartData" :style="myStyle" class="pie" />
	</div>
</template>

<script>
import { Pie } from "vue-chartjs";

import {
	Chart as ChartJS,
	Title,
	Tooltip,
	Legend,
	ArcElement,
	CategoryScale,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

export default {
	name: "PieChart",
	components: {
		Pie,
	},
	data() {
		return {
			chartData: this.$store.state.chartData4,
		};
	},
	computed: {
		myStyle() {
			return {
				height: `200px`,
				width: `300px`,
				position: "relative",
			};
		},
	},
};
</script>
<style scoped>
.chart4 {
	width: 410px;
	height: 450px;
	margin-right: 10px;
	background-color: #080231;
	position: relative;
}
.chart4 p {
	color: aliceblue;
	font-size: 30px;
	font-weight: bold;
	top: 40px;
	left: 250px;
	position: absolute;
	top: 30px;
	left: 150px;
}
.pie {
	position: absolute;
	top: 100px;
	left: 55px;
}
</style>
