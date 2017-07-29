<template>
  <div id="app">
    <router-view></router-view>
    <form class="row">
      <input type='text' class="col s9"/>
      <button class="col s3"> Search </button>
    </form>
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
        <recipe-item v-for="recipe in recipes" :key="recipe.id" :recipe="recipe"></recipe-item>
      </ul>
    </div>
  </div> 
</template>

<script>
import RecipeItem from './components/RecipeItem'
export default {
  name: 'app',
  data() {
    return {
      recipes: [],
      movie: {}
    }
  },
  components: {
    RecipeItem
  },
  mounted() {
    var i;
    for(i=0; i < 4; i++){
      this.recipes.push({
        image_src: '',
        url: '',
        title: 'recipe greatness',
        id: i
      })
    }
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
