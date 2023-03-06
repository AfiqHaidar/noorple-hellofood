export const BASE_URL = "https://api.themoviedb.org/3";
export const API_KEY = "a980cc7ca1eb41173fb58378480e6fb1";

export const getPopularMovies = async (page: number) => {
  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`
  );
  const data = await response.json();
  return data;
};