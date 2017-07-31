<template>
  <div class="row">
    <h3>
      Movie Item
    </h3>
    <div class="col s6 center-align">
      <div class="card">
        <div class="card-image">
          <img v-if="movie_item.image != null" :src="movie_item.image" />
          <span class="card-title">{{ movie_item.title }}</span>
        </div>
        <div class="card-content">
          <p>{{ movie_item.description }}</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {bus} from '../helpers/apiCalls.js'

  export default {
    name: 'movie-item',
    data() {
      return {
        movie_item: {
          title: 'Search for a Recipe',
          description: 'Get a recipe and then get a movie with that search',
          release: '',
          image: null
        }
      }
    },
    mounted() {
      bus.$on('updateMovie', (result) => {
        this.movie_item = {
          title: result.title,
          description: result.overview,
          release: result.release_date,
          image: 'https://image.tmdb.org/t/p/w500/' + result.poster_path
        }
      });
    },
    destroyed() {
      bus.$off('updateMovie')
    }
  }
</script>
