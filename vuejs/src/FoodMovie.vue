<template>
  <div id="app">
    <page-header></page-header>
    <router-view></router-view>
    <page-footer></page-footer>
  </div> 
</template>

<script>
  import PageHeader from './components/global/Header';
  import PageFooter from './components/global/Footer';
  export default {
    name: 'app',
    components: {
      PageHeader,
      PageFooter
    }
  }
</script>
