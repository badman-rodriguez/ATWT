import Vue from 'vue'
import Router from 'vue-router'
import Recipe from '../components/RecipeItem';
import Movie from '../components/MovieItem';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
   { path: '/recipe', component: Recipe,  props: {} },
   { path: '/movie', component: Movie, props: {} }
 ]
});
