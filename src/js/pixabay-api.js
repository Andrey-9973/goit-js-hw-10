import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '58355213-20d92452112ec05f5bea62a94';

export default function getImagesByQuery(requestText) {
  return axios.get('', {
    params: {
      key: API_KEY,
      q: requestText,
    },
  });
}
