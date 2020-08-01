<template>
  <div>test</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { BlogContent, HeaderTag } from 'types/index';

@Component({
  layout: 'base',
})
export default class Content extends Vue {
  head(): HeaderTag {
    return {
      title: this.item?.title ? this.item.title : '',
    };
  }

  @Prop({ default: {}, type: Object })
  private item?: BlogContent;
}
</script>
