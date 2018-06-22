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
    updateBasket(state, value) {
      const multiplied = state.basket.find(item => item.name === value.name);
      console.log(value.quantity)
      if (multiplied) {
        multiplied.quantity += value.quantity;
        multiplied.price = value.price * multiplied.quantity;
      }
      else {
        state.basket.push(value)
      }
    }
  },
  actions: {},
  getters: {},
});
