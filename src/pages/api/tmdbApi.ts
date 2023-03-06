import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'a980cc7ca1eb41173fb58378480e6fb1';

export const getPopularMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch popular movies');
  }
};