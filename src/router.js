// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import Details from './components/UserDeatils.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: Details,
    props: true,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
