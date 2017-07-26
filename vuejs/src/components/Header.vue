<template>
  <header>
    <nav>
      <ul>
       <li><router-link to="/">/</router-link></li>
       <li><router-link to="/recipe">/recipe</router-link></li>
       <li><router-link to="/movie">/movie</router-link></li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  name: 'page-header',
  data(){
    return {}
  },
  methods: { }
}
</script>
