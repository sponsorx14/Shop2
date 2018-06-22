import Vue from 'vue';
import Vuex from 'vuex';
import data from './data/index.json';

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    products: data,
    basket: [],
    inStock: []
  },
  mutations: {

    addToBasket(state, value) {
      const multiplied = state.basket.find(item => item.name === value.name);

      state.products.find(item => {
        if(item.name === value.name ){
          item.inStock -= 1
        }
      });

      if (multiplied) {
        multiplied.quantity += value.quantity;
        multiplied.price = value.price * multiplied.quantity;
      }
      else {
        state.basket.push(value);
      }
    },
    removeFromBasket(state, value) {
      const findProduct = state.basket.find(item => item.name === value.name);

      findProduct.quantity -= 1;
      findProduct.price = value.price * findProduct.quantity;

      state.products.find(item => {
        if(item.name === value.name ){
          value.quantity > 0 ? item.inStock += 1 : null;
        }
      });

      if (findProduct.quantity < 0) {
        findProduct.quantity = 0;
        findProduct.price = 0;
      }
    },
    removeFromBasketAll(state, value) {
      const multiplied = state.basket.find(item => item.name === value.name);

      multiplied.quantity = 0;
      multiplied.price = 0;

      state.products.find(item => {
        if(item.name === value.name ){
          value.quantity > 0 ? item.inStock += 1 : null;
        }
      });

    },


  },
  actions: {},
  getters: {},
});
