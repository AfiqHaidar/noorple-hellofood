import { useQuery } from 'react-query';

const getRecipes = async () => {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?apiKey=5839fe21431b46bc8ed83bc2c50cf2aa&number=10`
  );
  const data = await response.json();
  return data.recipes;
};

const useRecipes = () => {
  return useQuery('recipes', getRecipes);
};

export default useRecipes;

