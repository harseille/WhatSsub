import axios from 'axios';
import { INGREDIENT_PATH, RECIPE_PATH } from '@constants/constants';

import { 인터페이스_재료데이터, 인터페이스_레시피 } from '@typings/ISandwich';

export const fetchIngredients = async () => {
  const ingredientRes = await axios.get(INGREDIENT_PATH);
  const ingredientsData: 인터페이스_재료데이터[] = ingredientRes.data;
  return ingredientsData;
};

export const fetchRecipe = async () => {
  const recipeRes = await axios.get(RECIPE_PATH);
  const recipeData: 인터페이스_레시피[] = recipeRes.data;
  return recipeData;
};
