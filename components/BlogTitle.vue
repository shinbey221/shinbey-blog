<template>
  <div class="blog-title">
    <div>{{ title }}</div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'

@Component
export default class BlogTitle extends Vue {
  @Prop({ default: '' })
  private title!: string
}
</script>

<style scoped>
.blog-title {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  height: 20vh;
}
</style>
