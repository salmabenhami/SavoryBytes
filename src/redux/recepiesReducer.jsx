import { createSlice } from '@reduxjs/toolkit';
import initialStateNormal from '../components/FichierRecepies/normalVf';
import initialStateLactoseFree from '../components/FichierRecepies/LactoseFreevf';
import initialStateDietFriendly from '../components/FichierRecepies/DietFriendly';

const initialState = {
  dietFriendly: initialStateDietFriendly,
  normal: initialStateNormal,
  lactoseFree: initialStateLactoseFree,
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    affichage:(state) => state,
    addRecipe: (state, action) => {
      const { mode, recipe } = action.payload;
      state[mode.toLowerCase()].push(recipe);
    },
    removeRecipe: (state, action) => {
      const { mode, id } = action.payload;
      state[mode.toLowerCase()] = state[mode.toLowerCase()].filter(recipe => recipe.id !== id);
    },
    updateRecipe: (state, action) => {
      const { mode, id, updatedRecipe } = action.payload;
      const recipeIndex = state[mode.toLowerCase()].findIndex(recipe => recipe.id === id);
      if (recipeIndex !== -1) {
        state[mode.toLowerCase()][recipeIndex] = { ...state[mode.toLowerCase()][recipeIndex], ...updatedRecipe };
      }
    },
  },
});
export const selectCategories = (state) => {
  const categories = new Set();
  Object.values(state.recipes).forEach((recipes) => {
    recipes.forEach((recipe) => {
      categories.add(recipe.category);
    });
  });
  return Array.from(categories);
};

export const selectFilteredRecipes = (state, mode, category) => {
  const normalizedMode = mode.toLowerCase(); 
  const normalizedCategory = category
    .split(/[-_]/) 
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
    .join(' ');
    
  if(normalizedMode === 'normal'){
    var recipes = state.recipes.normal;
  }
  else if(normalizedMode === 'diet'){  
     recipes = state.recipes.dietFriendly;
  }
  else if(normalizedMode === 'lactose-free'){
     recipes = state.recipes.lactoseFree;
  }
  else{
     recipes = state.recipes.normal;
  }
  if (!recipes) {
    return [];
  }

  return recipes.filter(recipe => recipe.category === normalizedCategory); 
};

export const getRecipesByMode = (state, mode) => {
  const givenmode = mode.toLowerCase();  
  if(givenmode === 'normal'){
    var recipes = state.recipes.normal;
  }
  else if(givenmode === 'diet'){  
     recipes = state.recipes.dietFriendly;
  }
  else if(givenmode === 'lactose-free'){
     recipes = state.recipes.lactoseFree;
  }
  else{
     recipes = state.recipes.normal;
  }
  if (!recipes) {
    return [];
  }
  return recipes
};

export const { addRecipe, removeRecipe, updateRecipe } = recipesSlice.actions;


export default recipesSlice.reducer;
