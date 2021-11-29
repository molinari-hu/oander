<template>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		:width="width"
		:height="height"
		viewBox="0 0 50 60"
        preserveAspectRatio="xMidYMid meet"
		:aria-labelledby="iconName"
		role="presentation">
		<title :id="iconName" lang="en">{{ iconName }} icon</title>
		<g :fill="getColor()">
			<slot />
		</g>
	</svg>
</template>

<script>
export default {
	props: {
		iconName: {
			type: String,
			default: 'box'
		},
		width: {
			type: [Number, String],
			default: 18
		},
		height: {
			type: [Number, String],
			default: 18
		},
		iconColor: {
			type: String,
			default: 'currentColor'
		}
	},
	methods:{
		getColor() {						
			switch (this.iconColor) {
				case 'primary':
					return '#C4A37B';
				case 'secondary':
					return '#3A3A3A';
				case 'light':
					return '#ababab';	
				case 'black':
					return '#000000';
				default:
					return this.iconColor;
			}
		}
		
	}
}
</script>

<style scoped>
svg {
	display: inline-block;
	vertical-align: baseline;
	margin-bottom: -2px;
	transition: all .3s ease;
}
</style>
