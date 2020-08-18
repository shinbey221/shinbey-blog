<template>
  <Card>test</Card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Card from '~/components/Card.vue';

@Component({
  layout: 'base',
  components: {
    Card,
  },
})
export default class Content extends Vue {}
</script>
