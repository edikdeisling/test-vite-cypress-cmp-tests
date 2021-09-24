<template>
  <div data-test="app">
    <div>{{ hello }}</div>
  </div>
</template>

<script lang="ts" setup>
  import * as router from 'vue-router';
  import * as lodash from 'lodash-es';
  import * as pinia from 'pinia';
  import { computed } from 'vue';

  console.log(router, pinia, lodash);
  const hello = computed(() => 'Hello world')
</script>
