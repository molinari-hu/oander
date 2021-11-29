<template>
	<b-container fluid tag="section" class="icon-grid-root">
		<b-row>
			<b-container fluid="md" class="px-0 px-md-3">
				<div class="icon-grid">
					<div>
						<icon-base
							class="icon"
							:icon-color="'primary'"
							:width="60"
							:height="60"
							:icon-name="'leather'"
						>
							<icon-leather />
						</icon-base>
						<div>Leather strap</div>
					</div>
					<div>
						<icon-base
							class="icon"
							:icon-color="'primary'"
							:width="60"
							:height="60"
							:icon-name="'water'"
							><icon-water />
						</icon-base>
						<div>Water resistant</div>
					</div>
					<div>
						<icon-base
							class="icon"
							:icon-color="'primary'"
							:width="60"
							:height="60"
							:icon-name="'spring'"
							><icon-spring />
						</icon-base>
						<div>Spring Drive</div>
					</div>
					<div>
						<icon-base
							class="icon"
							:icon-color="'primary'"
							:width="60"
							:height="60"
							:icon-name="'warranty'"
							><icon-warranty />
						</icon-base>
						<div>Warranty</div>
					</div>
				</div>
			</b-container>
		</b-row>
	</b-container>
</template>

<script>
import IconBase from '@/components/IconBase.vue'
import IconLeather from '@/components/icons/IconLeather.vue'
import IconWater from '@/components/icons/IconWater.vue'
import IconSpring from '@/components/icons/IconSpring.vue'
import IconWarranty from '@/components/icons/IconWarranty.vue'
export default {
	name: 'IconGrid',
	components: { IconBase, IconLeather, IconWater, IconSpring, IconWarranty }
}
</script>

<style lang="scss">
.icon-grid-root {
	background-color: #292929;
	padding-top: 0;
	padding-bottom: 0;
	@include media-breakpoint-up(md) {
		padding-top: 2.4065rem;
		padding-bottom: 2.4065rem;
	}
}
.icon-grid {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 10.813rem 10.813rem;
	grid-gap: 1px;
	background-color: #c4a37b;
	background-clip: content-box;
	transition: all .3s ease;
	& > div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #292929;
		transition: inherit;
		& > div {
			margin-top: 1.25rem;
			color: #ffffff;
			font-weight: 700;
			transition: inherit;
		}
	}
	@include media-breakpoint-up(md) {
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-template-rows: 6.25rem;
	}
}
</style>
