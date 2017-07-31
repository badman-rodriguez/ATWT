<template>
  <div id="app">
    <router-view></router-view>
    <search-field></search-field>
    <div class="row">
      <h3>
        Movie Item
      </h3>
      <div class="col s6 center-align">
        <div class="card">
          <div class="card-image">
            <img src="images/sample-1.jpg">
            <span class="card-title">Card Title</span>
          </div>
          <div class="card-content">
            <p>I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively.</p>
          </div>
          <div class="card-action">
            <a href="#">This is a link</a>
          </div>
        </div>
      </div>
    </div>
    <div>
      <ul class="row">
        <recipe-item v-for="(recipe, key) in recipes" :key="key" :recipe="recipe.recipe"></recipe-item>
      </ul>
    </div>
  </div> 
</template>

<script>
import RecipeItem from './components/RecipeItem';
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
