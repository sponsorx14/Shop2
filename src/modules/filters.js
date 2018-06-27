import store from '../store';

const state = {
  filterName: '',
  filterCheckboxes: [],
  filterPriceFrom: 0,
  filterPriceTo: 9999,
  sortName: 'default'
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
    state.filterName = '';
    state.filterCheckboxes = [];
    state.filterPriceFrom = 0;
    state.filterPriceTo = 9999;
  },
  sortProducts(state, value) {
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
  sortProducts({commit}, value) {
    commit('sortProducts', value);
  }
};

const getters = {
  getSortedProducts() {
    const filter = store.state.products
      .filter(item => {
        if (state.filterCheckboxes.length === 0) {
          return store.state.products;
        }
        return state.filterCheckboxes.includes(item.categories);
      })
      .filter(item => {
        return item.name.toLowerCase().includes(state.filterName.toLowerCase());
      })
      .filter(item => {
        if (item.price >= state.filterPriceFrom && item.price <= state.filterPriceTo) {
          return item;
        }
      })
      .sort((a, b) => {
        if (state.sortName === 'alphabetic') {
          const nameA = a.name;
          const nameB = b.name;
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        }
        if (state.sortName === 'priceLowToHigh') {
          let priceA = a.price;
          let priceB = b.price;
          if (priceA < priceB) {
            return -1;
          }
          if (priceA > priceB) {
            return 1;
          }
          return 0;
        }
        if (state.sortName === 'default') {
          return store.state.products;
        }
      });
    return filter;
  },
};

export default {
  state,
  mutations,
  actions,
  getters
}