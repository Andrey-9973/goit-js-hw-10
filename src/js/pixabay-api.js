import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const API_KEY = '58355213-20d92452112ec05f5bea62a94';

export default async function getImagesByQuery(requestText) {
  const response = await axios.get('', {
    params: {
      key: API_KEY,
      q: requestText,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });

  return response.data;
}
