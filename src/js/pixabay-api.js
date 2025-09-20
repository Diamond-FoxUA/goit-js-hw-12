import axios from 'axios';

export default function getImagesByQuery(query) {
  return axios('https://pixabay.com/api/', {
    params: 
    { key: '52353734-aa83943fc4859b94495f66918', 
      q: query, 
      image_type: 'photo', 
      orientation: 'horizontal', 
      safesearch: true }
  })
    .then(response => response.data)
    .catch(error => {
      console.log(error);
      return [];
    })
}