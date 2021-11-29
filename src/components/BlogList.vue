<template>
  <div class="container-fluid container-md blog-list">
      <b-row align-v="stretch">
          <b-col v-for="(item, index) in listItems" md="6" lg="4" :key="index">
            <blog-list-item :list-item="item" />
          </b-col>          
      </b-row>
  </div>
</template>

<script>
import BlogListItem from '@/components/BlogListItem.vue'
export default {
    name: 'BlogList',
    components: {BlogListItem},
    props: {
        listItems: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            items: this.listItems
        }
    }
}
</script>

<style lang="scss">
.blog-list {
    transition: all .3s ease;
    padding: 1.875rem 0 1rem;
    @include media-breakpoint-up(md) {
        padding: 3.125rem 0 1.5625rem ;
    }
}
</style>