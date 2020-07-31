<template>
  <Card
    :title="item.title"
    :introduction="item.introduction"
    :date="item.date"
    :categories="item.category"
    @click="$emit('click', itemIndex)"
  />
  <!-- <v-card
      class="mx-auto card-style"
      outlined
      @click="$emit('click', itemIndex)"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="headline">{{
            item.title
          }}</v-list-item-title>
          <v-list-item-subtitle>{{ item.date }}</v-list-item-subtitle>
          <div>
            <template v-for="(item, key) in item.category">
              <v-chip :key="key" class="ma-2" label>
                <v-icon left> mdi-label</v-icon>
                {{ item }}
              </v-chip>
            </template>
          </div>
        </v-list-item-content>
      </v-list-item>
    </v-card> -->
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
export default class BlogTitle extends Vue {
  @Prop({ default: '' })
  private item!: BlogContent;

  mounted(): void {
    console.log(new Date(this.item.date).toLocaleString('ja-JP'));
  }
}
</script>

<style scoped>
.card-style {
  margin-bottom: 30px;
}
</style>
