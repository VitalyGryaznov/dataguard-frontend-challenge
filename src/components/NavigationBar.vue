<script setup lang="ts">
import Toggle from './Toggle.vue';
import { ref, onMounted } from 'vue';
import { useTabs } from '../hooks/useTabs';
import { useTabDataStore } from '../stores/tabData';

const { tabs, isTabsLoading, isTabsError } = useTabs();

const tabDataStore = useTabDataStore();

onMounted(() => tabDataStore.fetchTabsData());

// TODO move it to utils
const getImgUrl = (iconName: string) => {
  return new URL(`../assets/${iconName}.svg`, import.meta.url).href;
};
</script>

<template>
  <header>
    <div class="logo-and-nav">
      <img alt="DataGuard logo" class="logo" src="@/assets/logo.svg" width="100" height="33" />

      <div
        v-if="
          !isTabsLoading &&
          !tabDataStore.isTabDataLoading &&
          !isTabsError &&
          !tabDataStore.isTabError &&
          tabs.length !== 0
        "
        class="wrapper"
      >
        <nav>
          <div class="menu-item" v-for="tab in tabs" :key="tab">
            <img
              :alt="tabDataStore.tabData[tab].title"
              :src="getImgUrl(tabDataStore.tabData[tab].icon)"
              width="20"
              height="20"
            />
            <RouterLink :to="`/tabs/${tab}`"> {{ tabDataStore.tabData[tab].title }}</RouterLink>
          </div>
        </nav>
      </div>
      <div v-else-if="isTabsError || tabDataStore.isTabError" indeterminate>Unexpected error</div>
      <v-progress-circular v-else indeterminate></v-progress-circular>
    </div>

    <div class="all-plugins-toggle-wrapper">
      <div>All plugins enabled</div>
      <Toggle msg="w" />
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 0 0 200px;
  line-height: 1.5;
  max-height: 100vh;
  background-color: var(--vt-c-white-mute);
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 14px;
  text-align: left;
  margin-top: 2rem;
}

.menu-item:has(a.router-link-exact-active) {
  background-color: var(--vt-c-white);
  border-left: 4px solid red;
  padding-left: 10px;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
.menu-item {
  display: flex;
  padding: 20px 0 20px 14px;
}

.all-plugins-toggle-wrapper {
  align-self: center;
  padding: 10px 14px 10px 14px;
  display: flex;
  justify-content: space-between;
}
</style>
