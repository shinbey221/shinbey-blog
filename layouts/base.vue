<template>
  <v-app class="all-area">
    <div class="main-content">
      <BlogHeader />
      <v-row class="mb-6 item-area" :class="computedOverlayClass" no-gutters>
        <v-col md="2" />
        <v-col md="7" cols="12">
          <nuxt />
        </v-col>
        <v-col v-if="!$vuetify.breakpoint.smAndDown" md="3" class="right-style">
          <Profile />
        </v-col>
      </v-row>
    </div>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import BlogHeader from '~/components/BlogHeader.vue';
import Card from '~/components/Card.vue';
import Profile from '~/components/Profile.vue';
import { BLOG_TITLE, BLOG_SUBTITLE } from '~/constants/top';

interface RowClassObject {
  'row-small': boolean;
}

@Component({
  components: {
    BlogHeader,
    Card,
    Profile,
  },
  middleware: 'blogItems',
})
export default class Content extends Vue {
  title: string = BLOG_TITLE;
  subtitle: string = BLOG_SUBTITLE;

  rowClassObject: RowClassObject = {
    'row-small': false,
  };

  get computedOverlayClass(): RowClassObject {
    if (this.$vuetify.breakpoint.smAndDown) {
      this.rowClassObject['row-small'] = true;
    } else {
      this.rowClassObject['row-small'] = false;
    }
    return this.rowClassObject;
  }
}
</script>

<style scoped>
.all-area {
  background-color: rgb(230, 230, 230);
}

.item-area {
  display: flex;
  margin-top: 30px;
}
.row-small {
  padding: 0px 12px;
}

.right-style {
  padding: 0 20px;
}
</style>
