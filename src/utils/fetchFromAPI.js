import axios from 'axios';

export const BASE_URL='https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': 'f8aa1b1504msh232053f0f623c95p1cf021jsn390d12d70f0f',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
  };


  export const fetchFromAPI = async (url) =>{
    const { data } = await axios.get(`${BASE_URL}/${url}`,
    options);

    return data;
  }