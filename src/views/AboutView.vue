<template>
	<div class="about">
		<div class="content-part3">
			<BarChart5 class="BarChart5" />
			<BarChart6 class="BarChart5" />
			<BarChart7 class="BarChart5" />
		</div>
	</div>
</template>
<script>
// @ is an alias to /src
import BarChart5 from "@/components/chart5.vue";
import BarChart6 from "@/components/chart6.vue";
import BarChart7 from "@/components/chart7.vue";

export default {
	name: "HomeView",
	components: { BarChart5, BarChart6, BarChart7 },
};
</script>

<style scope>
.content-part3 {
	margin-top: 40px;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.BarChart5 {
	margin-top: 10px;
}
</style>
