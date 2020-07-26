<template>
  <v-app class="all-area">
    <div class="main-content">
      <BlogTitle :title="title" />
      <v-row class="mb-6 content-area" no-gutters>
        <v-col md="2" />
        <v-col md="10" cols="12">
          <nuxt />
        </v-col>
      </v-row>
    </div>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import BlogTitle from '~/components/BlogTitle.vue';

@Component({
  components: {
    BlogTitle,
  },
})
export default class Content extends Vue {
  title: string = `shinbey's blog`;
}
</script>

<style scoped>
.content-area {
  position: relative;
  top: 100px;
}
.all-area {
  background-color: rgb(250, 250, 250);
}
</style>
