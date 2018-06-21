import Vue from 'vue';
import Vuex from 'vuex';
import data from './data/index.json';

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    products: data,
    basket: [
    ],
  },
  mutations: {
    updateBasket(state, value){
      const multiplied = state.basket.find(item => item.name === value.name);

      if(multiplied){
        state.basket.find(item => {

          const price = item.qty * value.price;
          item.price += price;
          item.qty += value.qty;
        });
      }
      else {
        console.log(value.price)
        state.basket.push(value)
      }
    }
  },
  actions: {

  },
  getters: {

  },
});
