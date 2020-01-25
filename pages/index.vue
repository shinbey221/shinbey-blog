<template>
  <v-app>
    <BlogTitle :title="title" />
    <v-row class="mb-6 content-area" no-gutters>
      <v-col :cols="3"> </v-col>
      <v-col :cols="6">
        <v-card class="mx-auto" outlined style="margin-bottom: 30px;">
          <v-list-item>
            <v-list-item-avatar color="grey"></v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="headline"
                >Our Changing Planet</v-list-item-title
              >
              <v-list-item-subtitle
                >by Kurt Wagner</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>

          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
            height="194"
          ></v-img>

          <v-card-text>
            Visit ten places on our planet that are undergoing the
            biggest changes today.
          </v-card-text>
        </v-card>
        <v-card
          class="mx-auto"
          outlined
          style="height: 300px; margin-bottom: 30px;"
        >
        </v-card>
        <v-card
          class="mx-auto"
          outlined
          style="height: 300px; margin-bottom: 30px;"
        >
        </v-card>
      </v-col>
      <v-col :cols="3"> </v-col>
    </v-row>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import BlogTitle from '~/components/BlogTitle.vue'

@Component({
  components: {
    BlogTitle
  }
})
export default class IndexPage extends Vue {
  title: string = 'shinbey blog'
  head() {
    return {
      script: [
        {
          src:
            'https://identity.netlify.com/v1/netlify-identity-widget.js'
        }
      ]
    }
  }

  async created() {
    const files = await require.context(
      '~/assets/content/blog/',
      false,
      /\.json$/
    )
    console.log(files)
    const blogPosts = files.keys().map((key: any) => {
      const res = files(key)
      return res
    })
    console.log(blogPosts)
  }
}
</script>

<style>
.content-area {
}
</style>
