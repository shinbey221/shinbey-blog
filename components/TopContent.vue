<template>
  <v-card class="mx-auto" outlined style="margin-bottom: 30px;">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="headline">{{ item.title }}</v-list-item-title>
        <v-list-item-subtitle>{{ item.date }}</v-list-item-subtitle>
        <div>
          <v-chip class="ma-2" color="primary">Primary</v-chip>
          <v-chip class="ma-2" color="secondary">Secondary</v-chip>
        </div>
      </v-list-item-content>
    </v-list-item>
    <v-card-text>{{ item.content }}</v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'
import { BlogContent } from '~/types/index'

interface Props {
  title: string
  date: string
  tag: Array<string>
  content: string
}

@Component
export default class BlogTitle extends Vue {
  @Prop({ default: '' })
  private item!: BlogContent
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
