import Vue from 'vue';
import Vuex from 'vuex';
import basket from './modules/basket';
import filters from './modules/filters';
import modal from './modules/modal';
import pagination from './modules/pagination';
import newItem from './modules/newItem';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
  },
  mutations: {
    fetchData(state, data) {
      state.products = data;
    }
  },
  actions: {
    fetchData({commit}) {
      return new Promise((resolve, reject) => {
        axios.get('http://localhost:3000/data')
          .then(response => {
            commit('fetchData', response.data);
            resolve(response);
          }, error => {
            reject(error);
          });
      });
    },
  },
  getters: {},
  modules: {
    basketModule: basket,
    filtersModule: filters,
    modalModule: modal,
    paginationModal: pagination,
    newItemModule: newItem
  },
});
