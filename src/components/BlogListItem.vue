<template>
	<article class="blog-list-item">
		<b-card
			:title="item.title"
			:img-src="item.image"
			img-alt="Image"
			img-top
			tag="div"
            border-variant="#292929"
		>
			<a class="card-btn" :href="item.url">Read more 
                <icon-base
                    class="icon"
                    :icon-color="'primary'"
                    :width="12"
                    :height="12"
                    :icon-name="'arrow'"
                    ><icon-arrow-right />
                </icon-base>
                </a>
		</b-card>
	</article>
</template>

<script>
import IconBase from '@/components/IconBase.vue'
import IconArrowRight from '@/components/icons/IconArrowRight.vue'
export default {
	name: 'BlogListItem',
    components: { IconBase, IconArrowRight },
    props: {
        listItem: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            item: this.listItem
        }
    }
}
</script>

<style lang="scss">
.blog-list-item {
    margin-bottom: 1.875rem;
    transition: all .3s ease;
    .card-title {
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.5rem;
    color: #5A5A5A;
    @include media-breakpoint-up(xl) {
        font-size: 1.125rem;
        line-height: 1.75rem;
        }
    }
    .card-btn {
        display: inline-block;
        font-size: 0.875rem;
        font-weight: 500;
        text-decoration: none !important;
        @include media-breakpoint-up(lg) {
            font-size: 1rem;
        }
        > svg {
            transition: transform .3s ease-out;
        }
        &:hover > svg {
            transform: translateX(5px);
        }
    }
}

</style>
