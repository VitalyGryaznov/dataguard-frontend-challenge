import type { tabDataType } from '@/types';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000',
});

// TODO handle error case properly
const getTabs = (): Promise<string[]> => api.get('/tabs').then((res) => res.data);

const getTabsData = (): Promise<tabDataType> => api.get('/tabdata').then((res) => res.data);

const getPlugins = (): Promise<tabDataType> => api.get('/plugins').then((res) => res.data);

const updateTabs = (updateTabdata: any) =>
  api.put(`/tabdata/${updateTabdata.id}`, updateTabdata).then((res) => res.data);

export { getTabs, getTabsData, getPlugins };
