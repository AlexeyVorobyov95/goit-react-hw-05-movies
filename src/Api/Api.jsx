import axios from 'axios';

export async function getApi(endpoint, ...params) {
  const BASE_URL = 'https://api.themoviedb.org/3/';
  const TOKEN = '54c688c0cf0b4dc9e7803df7038eeea9';
  const END_URL = {
    trending: `trending/all/day?api_key=${TOKEN}`,
    movie: `movie/${params[0]}?api_key=${TOKEN}&language=en-US`,
    credits: `movie/${params[0]}/credits?api_key=${TOKEN}&language=en-US`,
    reviews: `movie/${params[0]}/reviews?api_key=${TOKEN}&language=en-US&page=1`,
    search: `search/movie?api_key=${TOKEN}&language=en-US&query=${params[0]}&page=1&include_adult=false`,
  };

  try {
    const response = await axios.get(`${BASE_URL}${END_URL[endpoint]}`);
    return response;
  } catch (error) {
    console.error(error);
  }
}
