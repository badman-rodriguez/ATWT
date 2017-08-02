<template>
  <div class="row">
      <h3>
        {{ movie_item.title }}
      </h3>
      <div class="col s12 m6">
        <img class="movie-image" :src="movie_item.image" />
      </div>

      <div class="col s12 m6">
        <ul class="left-align">
          <li>
            <h4> Description</h4> {{ movie_item.description }}</li>
          <li> <h4> Release</h4> {{ movie_item.release }}</li>
          <li> <h4> Popularity </h4> {{ movie_item.popularity }} <span v-if="movie_item.popularity"> out of 10 </span></li>
        </ul>
      </div>
  </div>
</template>
<style lang="scss">
  .movie-image {
    width: 100%;
  }
</style>
<script>
  import {bus} from '../helpers/apiCalls.js'

  export default {
    name: 'movie-item',
    data() {
      return {
        movie_item: {
          title: '',
          description: '',
          release: '',
          image: 'https://placeimg.com/480/640/any/grayscale'
        }
      }
    },
    mounted() {
      bus.$on('updateMovie', (result) => {
        this.movie_item = {
          title: result.title,
          description: result.overview,
          release: result.release_date,
          image: 'https://image.tmdb.org/t/p/w500/' + result.poster_path,
          id: result.id,
          popularity: result.popularity
        }
      });
    },
    destroyed() {
      bus.$off('updateMovie')
    }
  }
</script>
