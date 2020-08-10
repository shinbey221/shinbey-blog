<template>
  <v-app class="all-area">
    <div class="main-content">
      <BlogHeader />
      <v-row class="mb-6 item-area" no-gutters>
        <v-col md="2" />
        <v-col md="7" cols="12">
          <nuxt />
        </v-col>
        <v-col md="3" v-if="!$vuetify.breakpoint.smAndDown" class="right-style">
          <Card>
            test
          </Card>
        </v-col>
      </v-row>
    </div>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import BlogHeader from '~/components/BlogHeader.vue';
import Card from '~/components/Card.vue';
import { BLOG_TITLE, BLOG_SUBTITLE } from '~/constants/top';

@Component({
  components: {
    BlogHeader,
    Card,
  },
})
export default class Content extends Vue {
  title: string = BLOG_TITLE;
  subtitle: string = BLOG_SUBTITLE;
}
</script>

<style scoped>
.all-area {
  background-color: rgb(250, 250, 250);
}

.item-area {
  display: flex;
  margin-top: 30px;
}

.right-style {
  padding: 0 20px;
}
</style>
