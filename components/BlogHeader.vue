<template>
  <header class="header-base" :class="computedHeaderClass">
    <div class="overlay" :class="computedOverlayClass">
      <h1 class="blog-title">{{ title }}</h1>
      <p class="subtitle">
        {{ subtitle }}
      </p>
    </div>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { BLOG_TITLE, BLOG_SUBTITLE } from '~/constants/top';

interface HeaderClassObject {
  'header-normal': boolean;
  'header-small': boolean;
}
interface OverlayClassObject {
  'overlay-small': boolean;
}

@Component
export default class BlogHeader extends Vue {
  title: string = BLOG_TITLE;
  subtitle: string = BLOG_SUBTITLE;

  headerClassObject: HeaderClassObject = {
    'header-normal': true,
    'header-small': false,
  };

  overlayClassObject: OverlayClassObject = {
    'overlay-small': false,
  };

  get computedHeaderClass(): HeaderClassObject {
    if (this.$vuetify.breakpoint.smAndDown) {
      this.headerClassObject['header-small'] = true;
      this.headerClassObject['header-normal'] = false;
    } else {
      this.headerClassObject['header-small'] = false;
      this.headerClassObject['header-normal'] = true;
    }
    return this.headerClassObject;
  }

  get computedOverlayClass(): OverlayClassObject {
    if (this.$vuetify.breakpoint.smAndDown) {
      this.overlayClassObject['overlay-small'] = true;
    } else {
      this.overlayClassObject['overlay-small'] = false;
    }
    return this.overlayClassObject;
  }
}
</script>

<style scoped>
.header-base {
  align-items: center;
  display: flex;
  background-image: url('./../images/manhattan.jpg');
  justify-content: center;
  background-position: 0 -200px;
}
.header-normal {
  height: 350px;
}
.header-small {
  height: 250px;
}
.overlay {
  padding: 26px 26px;
  color: white;
  font-family: 'Lato';
  text-align: center;
  background-color: rgba(200, 200, 200, 0.4);
}
.overlay-small {
  width: 85%;
  padding: 16px 8px 2px;
}
.overlay-small h1 {
  font-size: 3.6rem;
}
.overlay-small div {
  font-size: 2.2rem;
}
.blog-title {
  font-size: 4.2rem;
}
.subtitle {
  margin-top: 10px;
  font-size: 2.8rem;
}
</style>
