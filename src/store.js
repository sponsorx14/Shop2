import Vue from 'vue';
import Vuex from 'vuex';
import data from './data/index.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: data,
    basket: [],
    inStock: [],
    searchTerm: '',
    filteredCheckboxes: [],
    filterPriceFrom: 0,
    filterPriceTo: 9999,
    totalPrice: 0,
    basketQuantity: 0
  },
  mutations: {
    addToBasketOne(state, value) {
      const multiplied = state.basket.find(item => item.name === value.name);
      state.basketQuantity += value.quantity;
      state.products.find(item => {
        if (item.name === value.name) {
          item.inStock -= 1
        }
      });
      if (multiplied) {
        multiplied.quantity += value.quantity;
        multiplied.price = value.price * multiplied.quantity;
        state.totalPrice += value.price;

      }
      else {
        state.basket.push(value);
        state.totalPrice += value.price;
      }
    },
    removeFromBasket(state, value) {
      const findProduct = state.basket.find(item => item.name === value.name);
      state.basketQuantity -= 1;
      findProduct.quantity -= 1;
      findProduct.price = value.price * findProduct.quantity;
      state.totalPrice -= value.price;

      state.products.find(item => {
        if (item.name === value.name) {
          value.quantity > 0 ? item.inStock += 1 : null;
        }
      });
    },
    removeFromBasketAll(state, value) {
      const multiplied = state.basket.find(item => item.name === value.name);
      state.totalPrice -= multiplied.price;
      state.basketQuantity -= multiplied.quantity;
      multiplied.quantity = 0;
      multiplied.price = 0;
      state.products.find(item => {
        if (item.name === value.name) {
          value.quantity > 0 ? item.inStock += value.quantity : null;
        }
      });
    },
    updateResult(state, value) {
      state.searchTerm = value;
    },
    filterCheckbox(state, value) {
      state.filteredCheckboxes = value;
    },
    filterPrice(state, value) {
      value.priceFrom !== undefined ? state.filterPriceFrom = parseInt(value.priceFrom) : state.filterPriceFrom
      value.priceTo !== undefined ? state.filterPriceTo = parseInt(value.priceTo) : state.filterPriceTo
    },
    resetFilters(state) {
      state.searchTerm = ''
      state.filteredCheckboxes = []
      state.filterPriceFrom = 0;
      state.filterPriceTo = 9999;
    },
    resetBasket(state){
      state.totalPrice = 0;
      state.basket =  []
      state.basketQuantity = 0
    }
  },
  actions: {
    removeFromBasket({ commit }, value){
      commit('removeFromBasket', value)
    },
    removeFromBasketAll({ commit }, value){
      commit('removeFromBasketAll', value)
    },
    updateResult({commit}, value) {
      commit('updateResult', value)
    },
    filterCheckbox({ commit }, value) {
      commit('filterCheckbox', value)
    },
    filterPrice({ commit }, value) {
      commit('filterPrice', value)
    },
    resetFilters({ commit }) {
      commit('resetFilters')
    },
    resetBasket({ commit }){
      commit('resetBasket')
    }
  },
  getters: {
    filterCheckboxes(state) {
      if (state.filteredCheckboxes.length === 0) {
        return state.products;
      }
      return state.products.filter(item => state.filteredCheckboxes.includes(item.categories))
    },
    newProducts(state, getters) {
      const filteredCheckbox = getters.filterCheckboxes;

      const byName = filteredCheckbox.filter(item => {
        return item.name.toLowerCase().includes(state.searchTerm.toLowerCase());
      });
      const byPrice = byName.filter(item => {
        if (item.price >= state.filterPriceFrom && item.price <= state.filterPriceTo) {
          return item
        }
      });

      return byPrice;
    }
  },
});
