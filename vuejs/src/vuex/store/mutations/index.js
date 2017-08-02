import Vue from 'vue'
import * as types from '../mutation-types'

export default {
  [types.GET_RECIPES] (state, { recipes }) {
    state.recipes = recipes;
  },

  [types.CLEAR_SEARCH] (state) {
    state.recipes = [];
    state.movie= {};
  },
}