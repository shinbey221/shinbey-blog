<template>
  <div class="item-area">
    <v-col md="8">
      <template v-for="(item, key) in items">
        <TopContent :key="key" :item="item" @click="routeContent(item)" />
      </template>
    </v-col>
    <v-col md="4">
      <Card>
        test
      </Card>
    </v-col>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { items, categories } from './../store/index';
import BlogTitle from '~/components/BlogTitle.vue';
import TopContent from '~/components/TopContent.vue';
import Card from '~/components/Card.vue';

@Component({
  layout: 'base',
  components: {
    BlogTitle,
    TopContent,
    Card,
  },
})
export default class IndexPage extends Vue {
  items: Array<any> = [];
  itemCategories: string[] = [];
  head(): { script: { src: string }[] } {
    return {
      script: [
        {
          src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
        },
      ],
    };
  }

  async created(): Promise<void> {
    await items.getAllBlogItems();
    await categories.getAllCategories();
    this.items = items.AllBlogItems;
    this.itemCategories = categories.AllCategories;
  }

  routeContent(item: any): void {
    this.$router.push({
      path: `contents/${item.id}`,
      params: { test: 'aaaaa' },
    });
  }
}
</script>

<style>
.item-area {
  display: flex;
}
</style>
