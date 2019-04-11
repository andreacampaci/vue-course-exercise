<template>
  <div class="home">
    <h1>This is an home page</h1>
    <!--<button @click="navToAbout()" >My custom Router action</button>-->
    <button @click="navToProfile('marco rossi')" >Marco Rossi profile</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
  /*navToAbout() {
    this.$router.push('/about');
  }*/
  navToProfile (name: string) {
    // this.$router.push({ path: `/profile/${name}`});
    this.$router.push({ name: 'profile', params: { name } });
  }
}
</script>
