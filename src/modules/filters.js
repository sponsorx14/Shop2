import store from '../store';

const state = {
  filterName: '',
  filterCheckboxes: [],
  filterPriceFrom: 0,
  filterPriceTo: 9999,
  sortedProducts: [],
  sortName: ''
};

const mutations = {
  filterName(state, value) {
    state.filterName = value;
  },
  filterCheckbox(state, value) {
    state.filterCheckboxes = value;
  },
  filterPrice(state, value) {
    value.priceFrom !== undefined ? state.filterPriceFrom = parseInt(value.priceFrom) : state.filterPriceFrom
    value.priceTo !== undefined ? state.filterPriceTo = parseInt(value.priceTo) : state.filterPriceTo
  },
  resetFilters(state) {
    state.filterName = ''
    state.filterCheckboxes = []
    state.filterPriceFrom = 0;
    state.filterPriceTo = 9999;
  },
  sortProducts(state, value) {
    state.sortedProducts = store.state.products;
    state.sortName = value;
  }
};

const actions = {
  filterName({commit}, value) {
    commit('filterName', value);
  },
  filterCheckbox({commit}, value) {
    commit('filterCheckbox', value);
  },
  filterPrice({commit}, value) {
    commit('filterPrice', value);
  },
  resetFilters({commit}) {
    commit('resetFilters');
  },
  sortProducts({ commit }, value){
    commit('sortProducts', value);
  }
};

const getters = {
  filteredCheckboxes(state) {
    if (state.filterCheckboxes.length === 0) {
      return store.state.products;
    }
    return store.state.products.filter(item => state.filterCheckboxes.includes(item.categories))
  },
  updatedProducts(state, getters) {
    const filteredCheckboxs = getters.filteredCheckboxes;
    const sortedProducts = getters.sortedProducts;

    const filteredByName = filteredCheckboxs.filter(item => {
      return item.name.toLowerCase().includes(state.filterName.toLowerCase());
    });
    const filteredByPrice = filteredByName.filter(item => {
      if (item.price >= state.filterPriceFrom && item.price <= state.filterPriceTo) {
        return item
      }
    });
    return filteredByPrice;
  },
  getSortedProducts() {
      // filterPriceFrom: 0,
      // filterPriceTo: 9999,
      // sortedProducts: [],
      // sortName: ''

    return this.state.products.filter().sort()
  },
  sortedProducts(state){
    if(state.sortName === 'alphabetic') {
      state.sortedProducts.sort((a,b) => {
        let nameA = a.name.toLowerCase();
        let nameB = b.name.toLowerCase();
        if(nameA < nameB){
          return -1;
        }
        if(nameA > nameB){
          return 1;
        }
        return 0;
      });
    }
    if(state.sortName === 'priceLowToHigh') {
      state.sortedProducts.sort((a,b) => {
        let priceA = a.price;
        let priceB = b.price;
        if(priceA < priceB){
          return -1;
        }
        if(priceA > priceB){
          return 1;
        }
        return 0;
      });
    }
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}