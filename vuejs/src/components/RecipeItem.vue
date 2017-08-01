<template>
  <li class="recipe-item col s12 m6 l3">
      <img :src="recipe.image" />
      <a class="waves-effect waves-light btn" :href="recipe.url">{{recipe.label}} </a>
  </li>
</template>
<style lang="scss">
  .recipe-item {
    padding: 1em;
    margin-bottom: 1em;
    border-top: 1px solid #eee;
    text-align: center;
    
    > a {
      text-decoration: none;
      width: 95%;
    }
  }
</style>
<script>
export default {
  name: 'recipe-item',
  data() {
    return {}
  },
  props:['recipe'],
  methods: {}
}
</script>
