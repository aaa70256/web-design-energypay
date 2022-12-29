<template>
	<div class="chart4">
		<p>產業分布</p>
		<Pie
			:chart-data="chartData"
			:style="myStyle"
			:chart-options="options"
			class="pie"
		/>
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
			chartData: this.$store.state.chartData7,
			options: {
				plugins: {
					legend: {
						position: "right",
					},
				},
			},
		};
	},
	computed: {
		myStyle() {
			return {
				height: `250px`,
				width: `400px`,
				position: "relative",
			};
		},
	},
};
</script>
<style scoped>
.chart4 {
	width: 500px;
	height: 500px;
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
