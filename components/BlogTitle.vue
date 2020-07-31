<template>
  <header class="blog-top">
    <v-col md="1" v-if="!$vuetify.breakpoint.smAndDown" />
    <v-col md="4" cols="12">
      <div class="blog-title">
        {{ title }}
      </div>
      <div class="blog-subtitle">
        {{ subTitle }}
      </div>
    </v-col>
    <v-col md="7" />
    <!-- <div class="blog-title">
      {{ title }}
    </div>
    <div class="blog-subtitle">{{ subTitle }}</div> -->
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
  width: 100%;
}
.blog-title {
  font-size: 3rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.blog-subtitle {
  font-size: 1.5rem;
  color: #525151;
}
</style>
