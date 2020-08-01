<template>
  <header class="header-container">
    <div class="overlay">
      <h1 class="blog-title">{{ title }}</h1>
      <p class="subtitle">
        {{ subtitle }}
      </p>
    </div>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { BLOG_TITLE, BLOG_SUBTITLE } from '~/constants/top';

@Component
export default class BlogTitle extends Vue {
  title: string = BLOG_TITLE;
  subtitle: string = BLOG_SUBTITLE;
}
</script>

<style scoped>
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
