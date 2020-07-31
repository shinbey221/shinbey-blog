<template>
  <v-app class="all-area">
    <div class="main-content">
      <!-- <BlogTitle :title="title" /> -->
      <div class="header-container">
        <div class="overlay">
          <h1 class="blog-title">Shinbey's BLOG</h1>
          <p class="subtitle">
            Live everyday as if it were the last day
          </p>
        </div>
      </div>
      <v-row class="mb-6" no-gutters>
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
.all-area {
  background-color: rgb(250, 250, 250);
}
.header-container {
  align-items: center;
  display: flex;
  background-image: url('./../images/header.jpg');
  height: 300px;
}
.overlay {
  padding: 16px 24px;
  left: 12%;
  position: relative;
  color: white;
  font-family: 'Lato';
  text-align: center;
  background: linear-gradient(
      145deg,
      transparent 43px,
      rgba(255, 255, 255, 0.15) 20px
    ),
    linear-gradient(334deg, transparent 34px, rgba(255, 255, 255, 0.15) 20px);
  background-position: top left, bottom right;
  background-size: 100% 50%;
  background-repeat: no-repeat;
}
.blog-title {
  font-size: 3.6rem;
}
.subtitle {
  margin-top: 4px;
  font-size: 2.2rem;
}
</style>
