import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Quasar from '../components/Quasar.vue';
import Others from '../components/Others.vue';
import ParentComponent from '@/components/ParentComponent.vue';
import ChildrenComponent from '@/components/ChildrenComponent.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/quasar',
      name: 'quasar',
      component: Quasar,
    },
    {
      path: '/others',
      name: 'others',
      component: Others,
    },
    {
      path: '/parant',
      name: 'parant',
      component: ParentComponent,
    },
    {
      path: '/children',
      name: 'children',
      component: ChildrenComponent,
    },
  ],
});

export default router;
