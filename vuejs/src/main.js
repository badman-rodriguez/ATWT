import Vue from 'vue';
import FoodMovie from './FoodMovie';
import router from './router';
import store from './vuex/store';

new Vue({
  el: '#app',
  store,
  router,
  template: '<food-movie/>',
  components: { FoodMovie }
})
