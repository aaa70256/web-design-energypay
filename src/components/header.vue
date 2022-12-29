<template>
	<div class="header">
		<img src="@/assets/Logo (1).png" alt="" />
		<p>精神修練時光屋</p>
		<ul class="list">
			<li>
				<a href="#" @click.prevent="show = !show"
					>薪資結構調查&emsp;▼
					<transition name="fade">
						<ul class="showList" v-if="show">
							<li><a href="">前端工程師</a></li>
							<li><a href="">UI設計師</a></li>
						</ul>
					</transition>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			show: false,
		};
	},
	methods: {},
};
</script>

<style scoped>
.header {
	display: flex;
	align-items: center;
	padding-top: 10px;
}
.header p {
	margin-left: 60px;
	margin-right: 60px;
	color: aliceblue;
}
.list a {
	text-decoration: none;
	color: aliceblue;
}
.list > li {
	position: relative;
}
.showList {
	position: absolute;
	display: block;
	z-index: 100;
	margin-top: 10px;
	text-align: center;
	width: 130px;
}

.list ul li a {
	background-color: black;
	display: block;
	color: bisque;
	padding: 10px;
	font-size: 16px;
	font-weight: bold;
}
.list ul li a:hover {
	background-color: aqua;
	color: blue;
}

.fade-leave {
	opacity: 1;
}
.fade-leave-active {
	transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-leave-to {
	opacity: 0;
}

.fade-enter {
	opacity: 0;
}
.fade-enter-active {
	transition: all 0.3s ease-out;
}
.fade-enter-to {
	opacity: 1;
}
</style>
