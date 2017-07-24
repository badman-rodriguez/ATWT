import Vue from 'vue'
import Vuex from 'vuex'
import * as recipeActions from './actions/recipe-actions'
import * as actions from './actions/recipe-actions'

import * as movieGetters from './getters/recipe-getters'
import * as recipeGetters from './getters/recipe-getters'

import recipes from './modules/recipes'
import movies from './modules/movies'
import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    recipes,
    movies
  },
  strict: 'development',
  plugins: createLogger()
})
