import Vue from 'vue';
import Vuex from 'vuex';
import data from './data/index.json';
import basket from './modules/basket';
import filters from './modules/filters';
import modal from './modules/modal';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: data,
  },
  mutations: {
  },
  actions: {
  },
  getters: {},
  modules: {
    basketModule: basket,
    filtersModule: filters,
    modalModule: modal
  },
});
