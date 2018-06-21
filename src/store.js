import Vue from 'vue';
import Vuex from 'vuex';
import data from './data/index.json';

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    products: data,
    basket: [],

  },
  mutations: {

  },
  actions: {

  },
  getters: {

  },
});
