<template>
	<div class="chart2">
		<p>學歷與科系</p>
		<Bar
			:chart-data="chartData"
			class="BarChart2"
			:chart-options="{ indexAxis: 'y' }"
		/>
		<!--如果我要將我的BarChart變成水平的，我必須在option內將我的indexAxis設定為'y'，預設是x軸-->
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
			chartData: this.$store.state.chartData3,
		};
	},
};
</script>
<style scoped>
.chart2 {
	width: 650px;
	height: 450px;
	margin-left: 15px;
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
