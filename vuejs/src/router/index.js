import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Recipe from '../components/RecipeItem.vue';
import Movie from '../components/MovieItem.vue';

Vue.use(Router)
 
export default new Router({
  mode: 'history',
  routes: [
   { path: '/', component: Home },
   { path: '/recipe', component: Recipe,  props: {} },
   { path: '/movie', component: Movie, props: {} }
 ]
});
