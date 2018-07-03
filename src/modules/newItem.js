import axios from 'axios';

const mutations = {
  submitItem(state, value){
    axios.post('http://localhost:3000/data', Object.assign({}, value))
  }
};

const actions = {
  submitItem({commit}, value) {
    commit('submitItem', value);
  },
};
export default {
  mutations,
  actions,
};