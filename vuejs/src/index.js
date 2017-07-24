import Vue from 'vue';
import Header from './components/Header.vue';
import Footer from './components/footer.vue';
import Recipe from './components/RecipeItem.vue';
import Movie from './components/MovieItem.vue';
import Home from './components/Home.vue';

import VueRouter from 'vue-router'

Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes: [
   { path: '/', component: Home },
   { path: '/recipe', component: Recipe,  props: {} },
   { path: '/movie', component: Movie, props: {} }
 ]
})
const app = new Vue({
  el: '#app',
  components: {
    Header,
    Footer,
    Home,
    Recipe,
    Movie
  },
  router
});
