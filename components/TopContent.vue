<template>
  <Card
    :title="item.title"
    :introduction="item.introduction"
    :date="item.date"
    :categories="item.category"
  />
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator';
import Card from './Card.vue';
import { BlogContent } from '~/types/index';

@Component({
  components: {
    Card,
  },
})
export default class TopContent extends Vue {
  @Prop({ default: '' })
  private item!: BlogContent;

  routeContent(id: number): void {
    this.$router.push({
      path: `contents/${id}`,
      params: { test: 'aaaaa' },
    });
  }
}
</script>
