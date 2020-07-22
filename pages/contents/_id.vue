<template>
  <div>test</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
  layout: 'base',
})
export default class Content extends Vue {
  @Prop({ default: {}, type: Object })
  private item?: any;

  @Prop({ default: '' })
  private test?: string;

  mounted(): void {
    console.log('item', this.test);
  }
}
</script>
