<template>
  <header class="header-base">
    <div class="trim" :class="computedTrimClass">
      <img
        :class="{ 'header-image-small': $vuetify.breakpoint.smAndDown }"
        src="./../images/manhattan.jpg"
        alt="header-image"
      />
      <div class="overlay" :class="computedOverlayClass">
        <h1 class="blog-title">{{ title }}</h1>
        <p class="subtitle">
          {{ subtitle }}
        </p>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { BLOG_TITLE, BLOG_SUBTITLE } from '~/constants/top';

interface TrimClassObject {
  'trim-normal': boolean;
  'trim-small': boolean;
}
interface OverlayClassObject {
  'overlay-small': boolean;
}

@Component
export default class BlogHeader extends Vue {
  title: string = BLOG_TITLE;
  subtitle: string = BLOG_SUBTITLE;
  test: boolean = true;

  trimClassObject: TrimClassObject = {
    'trim-normal': true,
    'trim-small': false,
  };

  overlayClassObject: OverlayClassObject = {
    'overlay-small': false,
  };

  get computedTrimClass(): TrimClassObject {
    if (this.$vuetify.breakpoint.smAndDown) {
      this.trimClassObject['trim-small'] = true;
      this.trimClassObject['trim-normal'] = false;
    } else {
      this.trimClassObject['trim-small'] = false;
      this.trimClassObject['trim-normal'] = true;
    }
    return this.trimClassObject;
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
  justify-content: center;
}

.trim {
  overflow: hidden;
  width: 100%;
  height: 350px;
  position: relative;
}
.trim img {
  position: absolute;
  top: -50%;
  left: 0;
  width: 100%;
}
.trim-normal {
  height: 350px;
}
.trim-normal img {
  top: -50%;
}
.trim-small {
  height: 250px;
}
.trim-small img {
  top: 0;
}

.header-image-small {
  height: 300px;
}

.overlay {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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
  font-size: 3rem;
}
.overlay-small p {
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
