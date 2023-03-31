import { defineStore } from 'pinia';
import type { tabDataType } from '../types';
import { getPlugins, getTabsData } from '@/api/pluginsApi';
import { useTabDataStore } from './tabData';

export type pluginsStateType = {
  plugins: tabDataType;
  isPluginsLoading: boolean;
  isPluginsError: boolean;
};

export const usePluginsStore = defineStore('plugins', {
  state: (): pluginsStateType => ({
    plugins: {},
    isPluginsLoading: true,
    isPluginsError: false,
  }),
  actions: {
    async fetchPluginsData() {
      try {
        this.isPluginsError = false;
        this.isPluginsLoading = true;
        const response = await getPlugins();
        this.plugins = response;
      } catch (e) {
        this.isPluginsError = true;
        console.log(e);
      } finally {
        this.isPluginsLoading = false;
      }
    },
  },
});
