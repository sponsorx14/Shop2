import store from '../store';

const state = {
  basket: [],
  inStock: [],
  totalPrice: 0,
  basketQuantity: 0
};

const mutations = {
  addToBasketOne(state, value) {
    const duplicatedProduct = state.basket.find(item => item.id === value.id);
    state.basketQuantity += value.quantity;
    store.state.products.find(item => {
      if (item.id === value.id) {
        item.inStock -= value.quantity;
      }
    });
    if (duplicatedProduct) {
      duplicatedProduct.quantity += value.quantity;
      duplicatedProduct.price = value.price * duplicatedProduct.quantity;
      state.totalPrice += value.price;
    }
    else {
      state.basket.push(value);
      state.totalPrice += value.price;
    }
  },
  removeFromBasketOne(state, value) {
    const duplicatedProduct = state.basket.find(item => item.name === value.name);
    const newPrice = value.price / value.quantity;

    state.basketQuantity -= 1;
    duplicatedProduct.quantity -= 1;
    duplicatedProduct.price = newPrice * duplicatedProduct.quantity;
    state.totalPrice -= newPrice;

    store.state.products.find(item => {
      if (item.name === value.name) {
        value.quantity > 0 ? item.inStock += 1 : null;
      }
    });
  },
  removeFromBasketAll(state, value) {
    const duplicatedProduct = state.basket.find(item => item.name === value.name);
    state.totalPrice -= duplicatedProduct.price;
    state.basketQuantity -= duplicatedProduct.quantity;
    duplicatedProduct.quantity = 0;
    duplicatedProduct.price = 0;

    store.state.products.find(item => {
      if (item.name === value.name) {
        value.quantity > 0 ? item.inStock += value.quantity : null;
      }
    });
  },
  resetBasket(state) {
    store.state.products.filter(item => {
      state.basket.filter(basket => {
        if (item.id === basket.id) {
          item.inStock += basket.quantity;
        }
      });
    });
    state.totalPrice = 0;
    state.basket = [];
    state.basketQuantity = 0;
  }

};

const actions = {
  removeFromBasketOne({commit}, value) {
    commit('removeFromBasketOne', value);
  },
  removeFromBasketAll({commit}, value) {
    commit('removeFromBasketAll', value);
  },
  resetBasket({commit}) {
    commit('resetBasket');
  },
};

export default {
  state,
  mutations,
  actions,
};