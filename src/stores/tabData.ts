import { defineStore } from 'pinia';
import type { tabDataType } from '../types';
import { getTabsData } from '@/api/pluginsApi';

export type stateType = {
  tabData: tabDataType;
  isTabDataLoading: boolean;
  isTabError: boolean;
};

export const useTabDataStore = defineStore('tabData', {
  state: (): stateType => ({
    tabData: {},
    isTabDataLoading: true,
    isTabError: false,
  }),
  getters: {
    getSortedPluginIdsForTheTab: (state) => {
      return (tabId: string) => {
        const tab = state.tabData[tabId];
        const uniquePluginIds = [...tab.active, ...tab.disabled, ...tab.inactive].filter(
          (value, index, array) => array.indexOf(value) === index,
        );
        return uniquePluginIds.sort();
      };
    },
  },
  actions: {
    async fetchTabsData() {
      try {
        this.isTabError = false;
        this.isTabDataLoading = true;
        const response = await getTabsData();
        this.tabData = response;
      } catch (e) {
        this.isTabError = true;
        console.log(e);
      } finally {
        this.isTabDataLoading = false;
      }
    },
  },
});
