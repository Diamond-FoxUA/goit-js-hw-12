import axios from 'axios';

export default async function getImagesByQuery(query, page = 1) {
  try {
    const response = await axios('https://pixabay.com/api/', {
      params: {
        key: '52353734-aa83943fc4859b94495f66918',
        q: query,
        page: page,
        per_page: 15,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      }
    });

    return response.data;
  } catch(error) {
    console.log(error);
    return { hits: [], totalHits: 0};
  }
}