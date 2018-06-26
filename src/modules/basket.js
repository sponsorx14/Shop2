import store from '../store';

const state = {
  basket: [],
  inStock: [],
  totalPrice: 0,
  basketQuantity: 0
};
const mutations = {
  addToBasketOne(state, value) {
    const multiplied = state.basket.find(item => item.name === value.name);
    state.basketQuantity += value.quantity;
    store.state.products.find(item => {
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
    console.log(value)
    const multiplied = state.basket.find(item => item.name === value.name);
    state.totalPrice -= multiplied.price;
    state.basketQuantity -= multiplied.quantity;
    multiplied.quantity = 0;
    multiplied.price = 0;
    store.state.products.find(item => {
      if (item.name === value.name) {
        value.quantity > 0 ? item.inStock += value.quantity : null;
      }
    });
  },
  resetBasket(state){
    state.totalPrice = 0;
    state.basket =  []
    state.basketQuantity = 0
  }
};
const actions = {
  removeFromBasket({ commit }, value){
    commit('removeFromBasket', value)
  },
  removeFromBasketAll({ commit }, value){
    commit('removeFromBasketAll', value)
  },
  resetBasket({ commit }){
    commit('resetBasket')
  }
};

export default {
  state,
  mutations,
  actions,
}