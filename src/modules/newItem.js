import axios from 'axios';

const actions = {
  submitItem(state, value) {
    return new Promise((resolve, reject) => {
      axios.post('http://localhost:3000/data', value)
        .then(response => {
          resolve(response);
        }, error => {
          reject(error);
        });
    });
  },
};
export default {
  actions,
};