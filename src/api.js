import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/';
const API_KEY = '38425080-b53b5e000383fcc1aac5c96db';

export async function getPhoto(query, page, per_page) {
  try {
    const { data } = await axios('api/', {
      params: {
        key: API_KEY,
        q: query,
        page,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page,
      },
    });
    return data;
  } catch (error) {
    console.log(error.message);
  }
}