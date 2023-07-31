export const API_KEY = '38425080-b53b5e000383fcc1aac5c96db';

export function fetchIMG(query, currentPage) {
  return `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${currentPage}&per_page=40`;
}