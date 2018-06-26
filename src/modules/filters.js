import store from '../store';

const state = {
  filterName: '',
  filterCheckboxes: [],
  filterPriceFrom: 0,
  filterPriceTo: 9999,
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
  }
};

const actions = {
  filterName({commit}, value) {
    commit('filterName', value)
  },
  filterCheckbox({commit}, value) {
    commit('filterCheckbox', value)
  },
  filterPrice({commit}, value) {
    commit('filterPrice', value)
  },
  resetFilters({commit}) {
    commit('resetFilters')
  },
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

    const filteredByName = filteredCheckboxs.filter(item => {
      return item.name.toLowerCase().includes(state.filterName.toLowerCase());
    });
    const filteredByPrice = filteredByName.filter(item => {
      if (item.price >= state.filterPriceFrom && item.price <= state.filterPriceTo) {
        return item
      }
    });

    return filteredByPrice;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}