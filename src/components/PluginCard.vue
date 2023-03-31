<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps({
  plugin: Object, //TODO type plugin
  isActive: Boolean,
  isDisabled: Boolean,
});

const isActive = ref(props.isActive);
</script>

<template>
  <div class="plugin-card">
    <div class="all-plugins-toggle-wrapper">
      <div class="header-and-toggle">
        <div class="title">{{ plugin.title }}</div>

        <v-switch
          v-model="isActive"
          hide-details
          inset
          :color="isActive ? 'green' : 'red'"
          :label="isActive ? 'Allowed' : 'Blocked'"
        ></v-switch>
      </div>
      <div class="plugin-description">{{ plugin.description }}</div>
    </div>
  </div>
</template>

<style scoped>
.plugin-card {
  border: 1px solid gray;
  border-radius: 10px;
  width: 300px;
  height: 180px;
}
.header-and-toggle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px;
}

.plugin-description {
  padding: 0 14px 14px 14px;
}

.title {
  flex-grow: 4;
}
</style>
