import { getTabs } from '@/api/pluginsApi';
import axios from 'axios';
import { ref, onMounted } from 'vue';
import type { Ref } from 'vue';

export function useTabs() {
  const tabs: Ref<string[]> = ref([]);
  const isTabsLoading = ref(true);
  const isTabsError = ref(false);
  const fetching = async () => {
    try {
      const response = await getTabs();
      tabs.value = response;
    } catch (e) {
      isTabsError.value = true;
    } finally {
      isTabsLoading.value = false;
    }
  };

  onMounted(fetching);

  return {
    tabs,
    isTabsLoading,
    isTabsError,
  };
}
