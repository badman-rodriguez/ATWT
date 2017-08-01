import shop from '../../../helpers/apiCalls';
import * as types from '../mutation-types';
import * as getters from '../getters';

// initial state
// shape: [{ id, quantity }]
const state = {
  recipes:[]
}

// actions
const actions = {

}

// mutations
const mutations = {
  [types.GET_MOVIE] (state, { id }) {
  
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
