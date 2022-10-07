import Vue from 'vue';
import VueRouter from 'vue-router';
import AnimeView from '../Views/AnimeView/index.vue';
import HomeView from '../Views/HomeView/index.vue';
import MoiveView from '../Views/MovieView/index.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/home', component: HomeView },
  { path: '/movie', component: MoiveView },
  { path: '/anime', component: AnimeView },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
