<template>
  <header>
    <nav>
      <ul>
       <li><router-link to="/">Home</router-link></li>
       <li><router-link to="/Info">Site Info</router-link></li>
       <li><router-link to="/Magic">Magical Corner</router-link></li>
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
