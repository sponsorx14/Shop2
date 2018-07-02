import store from '../store';

const mutations = {
  submitItem(state, value){
    store.state.products.push(value)
  }
};

const actions = {
  submitItem({commit}, value) {
    commit('submitItem', value)
  },
};
export default {
  mutations,
  actions,
};