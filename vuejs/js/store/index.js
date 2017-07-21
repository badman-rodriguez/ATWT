import Vue from 'vue'
import Vuex from 'vuex'
import * as recipeActions from './actions/recipe-actions'
import * as movieActions from './actions/movie-actions'

import * as movieGetters from './getters/recipe-getters'
import * as recipeGetters from './getters/movie-getters'

import recipes from './modules/recipes'
import products from './modules/movie'
import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    cart,
    products
  },
  strict: 'development',
  plugins: createLogger()
})
