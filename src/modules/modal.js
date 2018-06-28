const state = {
  modalData: [],
};
const mutations = {
  displayModal(state, item){
    state.modalData.push(item);
    item.timer = null;
    item.timer = setTimeout(function () {
      const index = state.modalData.indexOf(item);
      state.modalData.splice(index, 1);
    }, 3000);
  },
  clearTimer(state, item) {
    clearTimeout(item.timer);
    const index = state.modalData.indexOf(item);
    state.modalData.splice(index, 1);

  }
};
const actions = {
  displayModal({ commit }, item){
    commit('displayModal', item);
  },
  clearTimer({ commit }, item){
    commit('clearTimer', item);
  }
};
export default {
  state,
  mutations,
  actions,
};