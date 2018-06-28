const state = {
  pages: 5,
  currentPage: 1,
  perPage: 5,
  range: {
    from: 0,
    to: 5
  }
};
const mutations = {
  changePage(state, item) {
    state.currentPage = item;
    if (state.currentPage === 1) {
      state.range.from = 0;
      state.range.to = state.perPage;
    } else {
      state.range.from = state.perPage * state.currentPage - 5;
      state.range.to = state.perPage * state.currentPage;
    }
  },
  showPages(state, item){
    state.pages = Math.ceil(item / state.perPage);
  }
};
const actions = {
  changePage({ commit }, item) {
    commit('changePage', item);
  },
  showPages({ commit }, item){
    commit('showPages', item)
  }
};
export default {
  state,
  mutations,
  actions,
};