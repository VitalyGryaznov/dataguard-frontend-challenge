<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import NavigationBar from './components/NavigationBar.vue';
</script>

<template>
  <NavigationBar />
  <div class="router-wrapper">
    <RouterView />
  </div>
</template>

<style scoped>
.router-wrapper {
  flex-grow: 1;
}
</style>
