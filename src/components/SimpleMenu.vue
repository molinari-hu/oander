<template>
	<div class="simple-menu">
		<h2 v-if="title">{{ title }}</h2>
		<ul>
			<li v-for="(item, index) in simpleMenu" :key="index">
				<a :href="item.url">{{ item.label }}</a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'SimpleMenu',
	props: {
		title: {
			type: String,
			default: ''
		},
		menu: {
			type: Array,
			required: true
		}
	},
	data() {
		return {
			simpleMenu: this.menu
		}
	}
}
</script>

<style lang="scss">
.simple-menu {
	h2 {
		margin-bottom: 0.75rem;
		font-weight: 700;
		font-size: 0.875rem;
		line-height: 1.125rem;
		color: $secondary;
		text-align: center;
		@include media-breakpoint-up(md) {
			text-align: left;
		}
	}
	ul {
		list-style-position: inside;
		list-style-image: none;
		list-style-type: none;
		padding: 0;
		> li > a {
			display: block;
			padding: 0.25rem 0;
			color: #ababab;
			text-align: center;
			font-size: 0.875rem;
			transition: color 0.3s ease;
			&:hover {
				color: $secondary;
			}
			@include media-breakpoint-up(md) {
				text-align: left;
			}
		}
	}
}
</style>
