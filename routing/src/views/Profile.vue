<template>
  <div class="about">
    <h1>Profile name: {{ $route.params.name }}</h1>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class Profile extends Vue {

  }
</script>
