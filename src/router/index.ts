import { createRouter, createWebHistory } from 'vue-router';
import TabView from '../views/TabView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/tabs/:id',
      name: 'tabs',
      component: TabView,
    },
  ],
});

export default router;
