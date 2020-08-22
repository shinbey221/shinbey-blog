<template>
  <div>
    <template v-for="(item, key) in items">
      <Card
        :key="key"
        :blog-item="item"
        :on-click="routeContent"
        class="card-style"
      />
    </template>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { items, categories } from './../store/index';
import Card from '~/components/Card.vue';

@Component({
  layout: 'base',
  components: {
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

  created(): void {
    this.items = items.AllBlogItems;
    this.itemCategories = categories.AllCategories;
  }

  routeContent(id: number): void {
    this.$router.push({
      path: `contents/${id}`,
    });
  }
}
</script>

<style scoped>
.card-style {
  margin-bottom: 20px;
}
</style>
