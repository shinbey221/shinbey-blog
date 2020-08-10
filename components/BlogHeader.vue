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
  'overlay-normal': boolean;
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
    'overlay-normal': true,
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
      this.overlayClassObject['overlay-normal'] = false;
    } else {
      this.overlayClassObject['overlay-small'] = false;
      this.overlayClassObject['overlay-normal'] = true;
    }
    return this.overlayClassObject;
  }
}
</script>

<style scoped>
.header-base {
  align-items: center;
  display: flex;
  background-image: url('./../images/header.jpg');
}
.header-normal {
  height: 300px;
}
.header-small {
  justify-content: center;
  height: 250px;
}
.overlay-small {
  position: inherit;
  width: 85%;
}
.overlay-normal {
  position: relative;
}
.overlay {
  padding: 16px 24px;
  left: 12%;
  color: white;
  font-family: 'Lato';
  text-align: center;
  background: linear-gradient(
      145deg,
      transparent 43px,
      rgba(255, 255, 255, 0.15) 20px
    ),
    linear-gradient(334deg, transparent 34px, rgba(255, 255, 255, 0.15) 20px);
  background-position: top left, bottom right;
  background-size: 100% 50%;
  background-repeat: no-repeat;
}
.blog-title {
  font-size: 3.6rem;
}
.subtitle {
  margin-top: 4px;
  font-size: 2.2rem;
}
</style>
