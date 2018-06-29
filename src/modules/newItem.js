import axios from 'axios';
const ROOT_URL = 'http://localhost:3000/data';

const actions = {
  submitNewItem({commit }, value){
    axios.post(`${ROOT_URL}`, Object.assign({}, value));
  }
};
export default {
  actions,
};