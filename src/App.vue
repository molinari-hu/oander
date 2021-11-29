<template>
	<div id="app">
		<header class="container-fluid container-lg header px-0">
			<main-menu :menu="mainMenu" />
		</header>
		<hero />
		<main>
			<icon-grid />
			<blog-list :list-items="blogListData" />
		</main>
		<footer>
			<b-container>
				<b-row>
					<b-col md="2" class="mb-3">
						<simple-menu title="About" :menu="aboutMenu" />
					</b-col>
					<b-col md="2" class="mb-3">
						<simple-menu title="Information" :menu="infoMenu" />
					</b-col>
					<b-col md="2" class="mb-3">
						<simple-menu title="Follow me!" :menu="followMeMenu" />
					</b-col>
					<b-col md="2"></b-col>
					<b-col md="4" class="mb-3">
						<h2>Subscribe to the newsletter</h2>
						<newsletter-form />
					</b-col>
				</b-row>
			</b-container>
			<div class="scroll-up">
				<a href="#" v-on="scrollToTop()">
					<icon-base
						class="icon"
						:icon-color="'primary'"
						:width="24"
						:height="24"
						:icon-name="'arrow-up'"
						><icon-arrow-up />
					</icon-base>
				</a>
			</div>
		</footer>
	</div>
</template>

<script>
import axios from 'axios'
import Hero from '@/components/Hero.vue'
import IconGrid from '@/components/IconGrid.vue'
import BlogList from '@/components/BlogList.vue'
import NewsletterForm from '@/components/NewsletterForm.vue'
import IconBase from '@/components/IconBase.vue'
import IconArrowUp from '@/components/icons/IconArrowUp.vue'
import MainMenu from '@/components/MainMenu.vue'
import SimpleMenu from '@/components/SimpleMenu.vue'

export default {
	name: 'App',
	components: {
		Hero,
		IconGrid,
		BlogList,
		NewsletterForm,
		IconBase,
		IconArrowUp,
		MainMenu,
		SimpleMenu
	},
	data() {
		return {
			mainMenu: [
				{ url: '#', label: 'Shop' },
				{ url: '#', label: 'Collection' },
				{ url: '#', label: 'Accessories' },
				{ url: '#', label: 'Gift guide' },
				{ url: '#', label: 'Blog' },
				{ url: '#', label: 'Content' }
			],
			aboutMenu: [
				{ url: '#', label: 'Introduction' },
				{ url: '#', label: 'Loremipsum' },
				{ url: '#', label: 'Brands sold' },
				{ url: '#', label: 'Conditions of use' },
				{ url: '#', label: 'Impressum' },
				{ url: '#', label: 'Contact' }
			],
			infoMenu: [
				{ url: '#', label: 'Help to purchasing' },
				{ url: '#', label: 'Purchasing information' },
				{ url: '#', label: 'Pay and delivery' },
				{ url: '#', label: 'FAQ' },
				{ url: '#', label: 'Data protection' },
				{ url: '#', label: 'Conditions' }
			],
			followMeMenu: [
				{ url: '#', label: 'Newsletter' },
				{ url: '#', label: 'Facebook' },
				{ url: '#', label: 'Google Plus' },
				{ url: '#', label: 'Twitter' }
			],
			blogListData: [],
			loading: true,
			errored: false
		}
	},
	methods: {
		scrollToTop() {
			document.body.scrollTop = 0
			document.documentElement.scrollTop = 0
		}
	},
	mounted() {
		axios
			.get('http://localhost:3000/blogItems')
			.then((response) => {
				this.blogListData = response.data
			})
			.catch((error) => {
				console.log(error)
				this.errored = true
			})
			.finally(() => (this.loading = false))
	}
}
</script>

<style lang="scss">
.bv-navbar,
.container,
.container-sm,
.container-md,
.container-lg,
.container-xl,
.container-xxl {
	padding-left: 1.25rem !important;
	padding-right: 1.25rem !important;
	@include media-breakpoint-up(xl) {
		padding-left: 2.5rem !important;
		padding-right: 2.5rem !important;
	}
}
header {
	position: fixed;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	z-index: 1030;
}
footer {
	border-top: 1px solid rgba(#2e2e2e, 15%);
	padding-top: 1.875rem;
	.scroll-up {
		border-top: 1px solid rgba(#2e2e2e, 15%);
		height: 3.438rem;
		display: flex;
		justify-content: center;
		align-items: center;
		> a {
			display: inline-block;
			&:hover {
				transition: transform 0.3s ease;
				transform: scale(1.2, 1.2);
			}
		}
	}
}
</style>
