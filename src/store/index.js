import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		chartData: {
			labels: [
				"高屏",
				"北北基",
				"中彰投",
				"雲嘉南",
				"日本",
				"桃竹苗",
				"新加坡",
				"中國",
				"香港",
				"美國",
				"菲律賓",
			],
			datasets: [
				{
					label: "Data One",
					backgroundColor: "#8e7dfa",
					data: [30, 32, 67, 15, 0, 33, 3, 2, 2, 4, 0],
				},
			],
		},
		chartData2: {
			labels: [
				"21~25歲",
				"26~30歲",
				"31~35歲",
				"36~40歲",
				"41~45歲",
				"46~50歲",
			],
			datasets: [
				{
					label: "Data One",
					backgroundColor: "#8e7dfa",
					data: [98, 239, 108, 24, 11, 0],
				},
			],
		},
		chartData3: {
			labels: ["非資訊科系相關", "資訊科系相關"],
			datasets: [
				{
					axis: "y",
					label: "My First Dataset",
					data: [188, 293],
					fill: false,
					backgroundColor: "#8e7dfa",
				},
			],
		},
		chartData4: {
			labels: ["男性", "女性"],
			datasets: [
				{
					backgroundColor: ["blue", "orange"],
					data: [278, 203],
				},
			],
		},
		chartData5: {
			labels: ["1年以下", "2-3年", "3-5年", "5-7年", "7-9年", "10年以上"],
			datasets: [
				{
					label: "Data One",
					backgroundColor: "#8e7dfa",
					data: [153, 83, 72, 13, 124, 8],
				},
			],
		},
		chartData6: {
			labels: [
				"36-50萬",
				"61-70萬",
				"71-80萬",
				"81-90萬",
				"90-100萬",
				"100-150萬",
				"150-200萬",
				"200-250萬",
				"250-300萬",
				"300-500萬",
			],
			datasets: [
				{
					label: "Data One",
					backgroundColor: "#8e7dfa",
					data: [298, 251, 150, 132, 102, 75, 44, 31, 20, 11],
				},
			],
		},
		chartData7: {
			labels: [
				"接案公司",
				"IOT物聯網",
				"教育產業",
				"金融相關",
				"傳統產業",
				"數位整合行銷",
				"SaaS服務",
				"電子商務",
				"博弈",
			],
			datasets: [
				{
					axis: "y",
					label: "My First Dataset",
					data: [96, 65, 58, 45, 34, 32, 20, 16, 16],
					backgroundColor: [
						"rgb(255, 99, 132)",
						"rgb(75, 192, 192)",
						"rgb(255, 205, 86)",
						"rgb(201, 203, 207)",
						"rgb(54, 162, 235)",
					],
					fill: false,
				},
			],
		},
	},
	getters: {},
	mutations: {},
	actions: {},
	modules: {},
});
