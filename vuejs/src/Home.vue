<template>
  <div id="app">
    <router-view></router-view>
    <search-field></search-field>
    <movie-item></movie-item>
    <div>
      <ul class="row">
        <recipe-item v-for="(recipe, key) in recipes" :key="key" :recipe="recipe.recipe"></recipe-item>
      </ul>
    </div>
  </div> 
</template>

<script>
import RecipeItem from './components/RecipeItem';
import MovieItem from './components/MovieItem'
import SearchField from './components/SeachField';
import {bus} from './helpers/apiCalls.js'
export default {
  name: 'app',
  data() {
    return {
      recipes: [],
      movie: {}
    }
  },
  components: {
    RecipeItem,
    MovieItem,
    SearchField
  },
  mounted() {
    bus.$on('updateList', (results) => {
      this.recipes = results.hits;
    });
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
