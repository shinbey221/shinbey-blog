<template>
  <div class="card">
    <div class="title">{{ title }}</div>
    <div class="content">{{ content }}</div>
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class BlogTitle extends Vue {
  @Prop({ default: '' })
  private title?: string;

  @Prop({ default: '' })
  private content?: string;
}
</script>

<style scoped>
.card {
  background-color: white;
  border: 1px solid rgb(207, 207, 207);
  padding: 8px;
  border-radius: 4px;
}
.title {
  font-size: 20px;
}
.content {
  max-height: 200px;
  word-break: break-all;
}
</style>
