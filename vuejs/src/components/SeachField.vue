<template>
  <form class="row">
    <input type="text" class="col s9" v-model="query_term"/>
    <button class="col s3" @click.prevent="search"> Search </button>
  </form>
</template>
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
      })
    }
  }
}
</script>
