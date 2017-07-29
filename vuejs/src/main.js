import Vue from 'vue'
import Home from './Home'
import router from './router'

new Vue({
  el: '#app',
  router,
  template: '<home/>',
  components: { Home }
})
