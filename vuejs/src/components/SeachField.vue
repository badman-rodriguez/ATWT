<template>
  <form class="search-field row">
    <input type="text" class="col s9" v-model="query_term"/>
    <button class="col s3 btn" @click.prevent="search"> Search </button>
  </form>
</template>
<style lang="scss">
  .search-field {
    padding: 1em;
  }
</style>
<script>
import { mashupCalls, bus } from '../helpers/apiCalls';

export default {
  name: 'search-field',
  data() {
    return {
      query_term: ''
    }
  },
  methods: {
    search() {
      mashupCalls('https://api.edamam.com/search?app_id=434c6602&app_key=b01a6c15b43be02d69245fab18e4f760&q=' + this.query_term).then(results => { 
        bus.$emit('updateList', results);
        
        mashupCalls('https://api.themoviedb.org/3/search/movie?api_key=e54d77ca7bc748d31f716384bcc7f74a&language=en-US&page=1&include_adult=false&query=' + this.query_term).then(response => { 
          bus.$emit('updateMovie', response.results[0]);
        });
      })
    }
  }
}
</script>
