<template>
  <Card>
    <div v-html="$md.render(item.content)"></div>
  </Card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { items } from './../../store/index';
import { BlogContent } from '~/types/index';
import Card from '~/components/Card.vue';

@Component({
  layout: 'base',
  components: {
    Card,
  },
})
export default class Content extends Vue {
  item: BlogContent | null = null;

  created(): void {
    const itemIndex = Number(this.$nuxt.$route.params.id) - 1;
    this.item = items.AllBlogItems[itemIndex];
  }
}
</script>
