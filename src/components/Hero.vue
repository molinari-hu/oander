<template>
	<section class="hero">
		<img
			class="hero__bg--pattern"
			src="@/assets/images/background_pattern.jpg"
			alt="background pattern"
		/>
		<div class="hero__bg--dark">
			<img v-if="isMobile"
				class="hero__watch"
				src="@/assets/images/hero_watch_m.png"
			/>
			<img v-else
				class="hero__watch"
				src="@/assets/images/hero_watch.png"
			/>
		</div>

		<div class="container-fluid container-md hero__content-box">
			<div class="text-box">
				<h1>
					The message <br class="d-inline-block d-sm-none" />
					is a simple.<br class="d-inline-block d-xl-none" />
					<span class="text-primary">That’s It.</span>
				</h1>
				<p class="d-none d-lg-block">
					This is watch maintains their signature aesthetic as it pushes the
					<b>boundaries of design possibility</b>. Despite its almost effortless
					appearance, Seconds is the result of a careful and <b>imaginative
					creative process</b>.
				</p>
				<b-button class="btn-custom" href="#"><b>Buy now</b></b-button>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'Hero',
	data: () => ({ isMobile: false }),

    beforeDestroy () {
      if (typeof window === 'undefined') return

      window.removeEventListener('resize', this.onResize, { passive: true })
    },

    mounted () {
      this.onResize()

      window.addEventListener('resize', this.onResize, { passive: true })
    },

    methods: {
      onResize () {
        this.isMobile = window.innerWidth < 992
      },
    },
}
</script>

<style lang="scss">
.hero {
	position: relative;
	height: 23.125rem;
	padding-top: 3.25rem;
	@include media-breakpoint-up(lg) {
		padding-top: 5rem;
		height: 43.75rem;
	}
	background: #f7f7f7;
	background: -moz-linear-gradient(left, #f7f7f7 0%, #ebebeb 100%);
	background: -webkit-linear-gradient(left, #f7f7f7 0%, #ebebeb 100%);
	background: linear-gradient(to right, #f7f7f7 0%, #ebebeb 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f7f7f7', endColorstr='#ebebeb',GradientType=1 );
	overflow: hidden;
	transition: all .3s ease;
	.hero__bg--pattern {
		position: absolute;
		display: none;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		z-index: 0;
		@include media-breakpoint-up(lg) {
			display: block;
		}
	}
	.hero__bg--dark {
		position: absolute;
		top: 0;
		right: 0;
		width: 3.125rem;
		height: 100%;
		z-index: 1;
		transition: inherit;
		background-color: #242123;
		background-image: url('../assets/images/christopher_text.svg');
		background-repeat: no-repeat;
		background-size: 108rem auto;
		background-position: 0 calc(50% + 2.75rem);
		@include media-breakpoint-up(lg) {
			width: 43.48%;
		}
		&::before {
			position: absolute;
			display: block;
			content: '';
			width: 197px;
			height: 504px;
			top: calc(50% + 2.75rem);
			left: 0;
			background-color: rgba(255, 255, 255, 0.1);
			transform: translateY(-50%);
			z-index: 0;
		}
		.hero__watch {
			position: absolute;
			top: calc(50% + 1.5rem);
			left: initial;
			right: 0;
			transform: translate(0, -50%);
			z-index: 3;
			transition: inherit;
			@include media-breakpoint-up(lg) {
				right: initial;
				top: calc(50% + 2.75rem);
				left: 0;			
				transform: translate(-46%, -50%);
			}
		}
	}
	& > .hero__content-box {
		position: relative;
		width: 100%;
		height: 100%;
		transition: inherit;
		.text-box {
			position: absolute;
			top: 50%;
			left: 1.25rem;
			transition: inherit;
			@include media-breakpoint-up(md) {
				max-width: 23.75rem;
			}
			@include media-breakpoint-up(xl) {
				left: 2.5rem;
				max-width: 28.75rem;
			}
			z-index: 10;
			transform: translateY(-50%);
			h1 {
				font-size: 1.75rem;
				font-weight: bold;
				line-height: 2.375rem;
				margin-bottom: 1.875rem;
				transition: inherit;
				@include media-breakpoint-up(lg) {
					font-size: 3.125rem;
					line-height: 3.875rem;
					margin-bottom: 2.5rem;
				}
			}
			h1 + p {
				margin-bottom: 2.5rem;
				color: #5A5A5A;
				letter-spacing: 0;
				line-height: 1.75rem;
			}
		}
	}
}
</style>
