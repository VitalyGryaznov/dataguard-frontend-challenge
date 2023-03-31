<script setup lang="ts">
import { usePluginsStore } from '@/stores/plugins';
import { onMounted } from 'vue';
import PluginCard from '../components/PluginCard.vue';
import { useTabDataStore } from '../stores/tabData';
import { useRoute } from 'vue-router';

const tabDataStore = useTabDataStore();

const pluginsStore = usePluginsStore();

onMounted(() => pluginsStore.fetchPluginsData());
</script>
<template>
  <div class="plugins-view">
    <h1 v-if="!tabDataStore.isTabDataLoading && !tabDataStore.isTabError">
      {{ tabDataStore.tabData[$route.params.id.toString()].title }}
    </h1>

    <div
      v-if="
        !pluginsStore.isPluginsLoading &&
        !pluginsStore.isPluginsError &&
        !tabDataStore.isTabDataLoading &&
        !tabDataStore.isTabError
      "
      class="plugins"
    >
      <div
        v-for="pluginId in tabDataStore.getSortedPluginIdsForTheTab($route.params.id.toString())"
        :key="pluginId"
      >
        <PluginCard
          :plugin="pluginsStore.plugins[pluginId]"
          :isActive="!tabDataStore.tabData[$route.params.id.toString()].inactive.includes(pluginId)"
          :isDisabled="
            tabDataStore.tabData[$route.params.id.toString()].disabled.includes(pluginId)
          "
        />
      </div>
    </div>
    <div v-else-if="pluginsStore.isPluginsError || tabDataStore.isTabError">error</div>
    <v-progress-circular v-else indeterminate></v-progress-circular>
  </div>
</template>

<style scoped>
.plugins-view {
  padding: 14px 14px 14px 14px;
}
.plugins {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}
</style>
