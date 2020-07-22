<template>
  <header class="blog-top">
    <div class="blog-title">
      {{ title }}
    </div>
    <div class="blog-subtitle">{{ subTitle }}</div>
  </header>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator';

@Component
export default class BlogTitle extends Vue {
  @Prop({ default: '' })
  private title!: string;

  subTitle: string = '技術とかサッカーとかアニメとか日常とか';
}
</script>

<style scoped>
.blog-top {
  height: 70px;
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: rgb(255, 255, 255);
  border-bottom: 1px solid rgb(250, 139, 139);
  position: fixed;
  width: 100%;
  z-index: 1;
}
.blog-title {
  font-size: 35px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin-left: 30px;
}
.blog-subtitle {
  font-size: 15px;
  color: #525151;
  margin-left: 15px;
}
</style>
