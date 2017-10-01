<template>
  <div id="app">
    <app-header></app-header>
    <main>
      <router-view></router-view>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './components/globals/AppHeader'
import AppFooter from './components/globals/AppFooter'

export default {
  name: 'app',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>