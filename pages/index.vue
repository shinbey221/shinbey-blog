<template>
  <v-app>
    <div class="main-content">
      <BlogTitle :title="title" />
      <v-row class="mb-6 content-area" no-gutters>
        <v-col :cols="3"></v-col>
        <v-col :cols="6">
          <template v-for="(item, key) in items">
            <TopContent :item="item" :key="key" />
          </template>
        </v-col>
        <v-col :cols="3"></v-col>
      </v-row>
    </div>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { items } from './../store/index'
import BlogTitle from '~/components/BlogTitle.vue'
import TopContent from '~/components/TopContent.vue'

@Component({
  components: {
    BlogTitle,
    TopContent
  }
})
export default class IndexPage extends Vue {
  title: string = 'shinbey blog'
  items: Array<any> = []
  head() {
    return {
      script: [
        {
          src: 'https://identity.netlify.com/v1/netlify-identity-widget.js'
        }
      ]
    }
  }

  async created() {
    await items.getAllBlogItems()
    this.items = items.AllBlogItems
  }
}
</script>

<style>
.main-content {
  background-color: rgb(252, 252, 252);
}
</style>
