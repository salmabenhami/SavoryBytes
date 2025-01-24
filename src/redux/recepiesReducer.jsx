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
    addRecipe: (state, action) => {
      const { mode, recipe } = action.payload;
      const normalizedMode = 
        mode === 'LactoseFree' ? 'lactoseFree' 
        : mode === 'DietFriendly' ? 'dietFriendly' 
        : 'normal';
      state[normalizedMode].push(recipe);
      console.log('Recipe added:', recipe);
      console.log('Updated state:', JSON.parse(JSON.stringify(state)));
    },
    removeRecipe: (state, action) => {
      const { mode, id } = action.payload;
      const normalizedMode = 
        mode === 'LactoseFree' ? 'lactoseFree' 
        : mode === 'DietFriendly' ? 'dietFriendly' 
        : 'normal';
      state[normalizedMode] = state[normalizedMode].filter(recipe => recipe.id !== id);
    },
    updateRecipe: (state, action) => {
      const { mode, id, updatedRecipe } = action.payload;
      const normalizedMode = 
        mode === 'LactoseFree' ? 'lactoseFree' 
        : mode === 'DietFriendly' ? 'dietFriendly' 
        : 'normal';
      const recipeIndex = state[normalizedMode].findIndex(recipe => recipe.id === id);
      if (recipeIndex !== -1) {
        state[normalizedMode][recipeIndex] = { 
          ...state[normalizedMode][recipeIndex], 
          ...updatedRecipe 
        };
      }
    },
  },
});

export const selectCategories = (state, mode) => {
  let categ;

  if (mode === 'normal') {
    categ = [...new Set(state.recipes.normal.map(recipe => recipe.category))]
  } else if (mode === 'diet') {
    categ = [...new Set(state.recipes.dietFriendly.map(recipe => recipe.category))]
  } else if (mode === 'lactose-free') {
    categ = [...new Set(state.recipes.lactoseFree.map(recipe => recipe.category))]
  } else {
    categ = [...new Set(state.recipes.normal.map(recipe => recipe.category))]

  }
  if (!categ) {
    return [];
  }
  return categ;

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
