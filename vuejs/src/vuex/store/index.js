import Vue from 'vue';
import Vuex from 'vuex';

import * as actions from './actions';
import * as getters from './getters';

import recipes from './modules/recipes';
import movies from './modules/movies';

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    recipes,
    movies
  }
})
