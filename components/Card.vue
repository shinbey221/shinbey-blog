<template>
  <div class="card" @click="onClick(blogItem.id)">
    <div class="card-header">
      <div class="card-title">{{ blogItem.title }}</div>
      <div class="card-date">{{ blogItem.date }}</div>
    </div>
    <div>
      <template v-for="(item, key) in blogItem.category">
        <v-chip
          :key="key"
          class="ma-2"
          color="orange darken-4"
          small
          text-color="white"
        >
          <v-icon small>mdi-label-variant-outline</v-icon>
          <div class="tag-style">{{ item }}</div>
        </v-chip>
      </template>
    </div>
    <div class="introduction">{{ blogItem.introduction }}</div>
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { BlogContent } from '~/types/index';

@Component
export default class BlogTitle extends Vue {
  @Prop({ default: {} })
  private blogItem?: BlogContent;

  @Prop({ default: Function })
  private onClick?: (id: number) => void;
}
</script>

<style scoped>
.card {
  background-color: white;
  border: 1px solid rgb(207, 207, 207);
  padding: 12px 16px;
  border-radius: 4px;
}
.card-header {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 4px;
}
.card-title {
  font-size: 2rem;
}
.card-date {
  font-size: 1.4rem;
  color: rgb(156, 156, 156);
  text-align: right;
}
.tag-style {
  font-size: 1.2rem;
  margin-left: 4px;
}
.introduction {
  margin-top: 4px;
  font-size: 1.4rem;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
</style>
