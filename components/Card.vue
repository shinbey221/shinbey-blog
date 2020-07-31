<template>
  <div class="card">
    <div class="card-header">
      <div class="card-title">{{ title }}</div>
      <div class="card-date">{{ date }}</div>
    </div>
    <div>
      <template v-for="(item, key) in categories">
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
    <!-- <v-row>
      <v-col class="card-title" md="9" cols="12">{{ title }}</v-col>
      <v-col class="card-date" md="3">{{ date }}</v-col>
    </v-row> -->
    <div class="introduction">{{ introduction }}</div>
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
  private date?: string;

  @Prop({ default: '' })
  private categories?: Array<string>;

  @Prop({ default: '' })
  private introduction?: string;
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
