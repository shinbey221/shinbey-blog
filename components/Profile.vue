<template>
  <Card class="profile-base">
    <div class="avatar-wrapper">
      <img class="avatar" src="./../images/profile_image.jpg" />
    </div>
    <div class="my_name">shinbey</div>
    <div class="icon-wrapper">
      <v-icon
        small
        class="icon-base twitter-color"
        color="white"
        @click="openPage('twitter')"
      >
        mdi-twitter
      </v-icon>
      <v-icon
        small
        class="icon-base github-color"
        color="white"
        @click="openPage('github')"
      >
        mdi-github
      </v-icon>
    </div>
    <div class="qiita-link">
      Qiita:
      <a href="https://qiita.com/shinbey221" target="”_blank”" rel="”noopener”">
        https://qiita.com/shinbey221
      </a>
    </div>
    <div class="introduction">
      <p>自社開発企業でフロントエンドエンジニアをしています。</p>
      <p>出身は兵庫県神戸市で東京在住です</p>
      <p>
        React+TypeScriptメインで開発しております。その他ではVue.js、Flutter、AWSなどを業務で扱いました。
      </p>
      <p>
        技術のことや趣味のことなどをゆるく書いていこうと思います。
      </p>
    </div>
  </Card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Card from './Card.vue';
import { MY_PAGE_LINK } from './../constants/top';

@Component({
  components: {
    Card,
  },
})
export default class Profile extends Vue {
  openPage(serviceName: 'twitter' | 'github'): void {
    window.open(MY_PAGE_LINK[serviceName], '_blank');
  }
}
</script>

<style scoped>
.profile-base {
  width: 300px;
  margin: auto;
}
.profile {
  font-family: 'Lato';
  font-size: 2rem;
  text-align: center;
  margin-top: 8px;
}
.avatar-wrapper {
  text-align: center;
  margin-top: 18px;
}
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: black;
}
.my_name {
  text-align: center;
  font-size: 2rem;
  font-family: 'Lato';
}
.icon-wrapper {
  width: 60px;
  display: flex;
  justify-content: space-between;
  margin: auto;
  margin-top: 8px;
}
.icon-base {
  width: 25px;
  height: 25px;
  border-radius: 50%;
}
.twitter-color {
  background-color: #00acee;
}
.github-color {
  background-color: #444444;
}
.qiita-link {
  text-align: center;
  font-size: 1.6rem;
  margin-top: 4px;
}
.introduction {
  color: rgb(75, 75, 75);
  margin-top: 16px;
  font-size: 1.4rem;
}
p {
  margin-bottom: 6px;
}
</style>
