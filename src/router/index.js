import Vue from 'vue';
import VueRouter from 'vue-router';
import Card from '../components/Card/index.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/home', component: Card },
  { path: '/player', component: VideoPlayer },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
