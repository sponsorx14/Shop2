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
    filteredCheckboxes: []
  },
  mutations: {

    addToBasketOne(state, value) {
      const multiplied = state.basket.find(item => item.name === value.name);

      state.products.find(item => {
        if (item.name === value.name) {
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

    addToBasketMore(state, value) {
      const multiplied = state.basket.find(item => item.name === value.name);
      const price = value.quantity * value.price;
      const values = {
        name: value.name,
        quantity: value.quantity,
        price: price
      };

      this.state.products.find(item => {
        if (item.name === value.name) {
          item.inStock -= value.quantity;
        }
      });

      if (multiplied) {
        multiplied.quantity += value.quantity;
        multiplied.price = value.price * multiplied.quantity;
      }
      else {
        state.basket.push(values);
      }
    },

    removeFromBasket(state, value) {
      const findProduct = state.basket.find(item => item.name === value.name);

      findProduct.quantity -= 1;
      findProduct.price = value.price * findProduct.quantity;

      state.products.find(item => {
        if (item.name === value.name) {
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
        if (item.name === value.name) {
          value.quantity > 0 ? item.inStock += value.quantity : null;
        }
      });
    },
    updateResult(state, value) {
      state.searchTerm = value;
    },
    filterCheckbox(state, value) {
      let filteredCheckbox = state.filteredCheckboxes;

      if (filteredCheckbox.includes(value)) {
        const indexOf = filteredCheckbox.indexOf(value);
        filteredCheckbox.splice(indexOf, 1)
      } else {
        filteredCheckbox.push(value);
      }
    }
  },
  actions: {
    updateResult({commit}, value) {
      commit('updateResult', value)
    },
    filterCheckbox({commit}, value) {
      commit('filterCheckbox', value)
    }
  },
  getters: {
    filterName(state) {
      return state.products.filter(item => {
        let itemName = item.name.toLowerCase();
        let filteredName = state.searchTerm.toLowerCase();
        return itemName.includes(filteredName);
      })
    },
    filterCheckbox(state) {
      const searchTerm = state.searchTerm.toLowerCase();
      const checkboxes = state.filteredCheckboxes;
      const filtered = state.products.filter(item => checkboxes.includes(item.categories));

      if (searchTerm) {
        return filtered.filter(item => {
          const itemName = item.name.toLowerCase();
          return itemName.includes(searchTerm)
          }
        )
      }
      return filtered
    }
  },
});
