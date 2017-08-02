import Vue from 'vue';
import Vuex from 'vuex';

import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';

Vue.use(Vuex)

const state = {
  recipes:[],
  movie:{
      title: '',
      description: '',
      release: '',
      image: 'https://placeimg.com/480/640/any/grayscale'
  }
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})
