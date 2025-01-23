// 

import { createSlice } from '@reduxjs/toolkit';
import user1 from '../components/images/UserImages/user1.jpg';
import user2 from '../components/images/UserImages/user2.jpg';
import user3 from '../components/images/UserImages/user3.jpg';

const initialDataUser = {
  currentUser: {
    id: 1,
    username: 'FoodLover123',
    email: 'foodlover123@example.com',
    profilePicture: user1,
    bio: 'Passionate about discovering new flavors and recipes.',
    favorites: [], 
  },
  users: [
    {
      id: 1,
      username: 'FoodLover123',
      email: 'foodlover123@example.com',
      profilePicture: user1,
      bio: 'Passionate about discovering new flavors and recipes.',
      joinedDate: '2024-01-10',
      favorites: [], 
    },
    {
      id: 2,
      username: 'CulinaryExplorer',
      email: 'culinaryexplorer@example.com',
      profilePicture: user2,
      bio: 'Exploring the world one dish at a time.',
      joinedDate: '2023-08-22',
      favorites: [],
    },
    {
      id: 3,
      username: 'HealthyEater',
      email: 'healthyeater@example.com',
      profilePicture: user3,
      bio: 'Dedicated to healthy and delicious cooking.',
      joinedDate: '2024-03-17',
      favorites: [], 
    },
  ],
  isAuthenticated: true,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'users',
  initialState: initialDataUser,
  reducers: {

    setProfile: (state, action) => {
      const { id, ...updatedData } = action.payload;

      if (state.currentUser && state.currentUser.id === id) {
        state.currentUser = { ...state.currentUser, ...updatedData };
      }

      const userIndex = state.users.findIndex((user) => user.id === id);
      if (userIndex !== -1) {
        state.users[userIndex] = { ...state.users[userIndex], ...updatedData };
      }
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
      state.isAuthenticated = true;
    },

    logoutUser: (state) => {
      state.currentUser = null;
      state.isAuthenticated = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },
    addToFavorites: (state, action) => {
      const { userId, recipe } = action.payload;

      const userIndex = state.users.findIndex((user) => user.id === userId);

      if (userIndex !== -1) {

        const isAlreadyFavorite = state.users[userIndex].favorites.some(
          (fav) => fav.recipeTitle === recipe.recipeTitle
        );
        if (!isAlreadyFavorite) {
          state.users[userIndex].favorites.push(recipe);
        }
      }

      if (state.currentUser && state.currentUser.id === userId) {
        const isAlreadyFavorite = state.currentUser.favorites.some(
          (fav) => fav.recipeTitle === recipe.recipeTitle
        );

        if (!isAlreadyFavorite) {
          state.currentUser.favorites.push(recipe);
        }
      }
    },

    removeFromFavorites: (state, action) => {
      const { userId, recipeTitle } = action.payload;

      const userIndex = state.users.findIndex((user) => user.id === userId);

      if (userIndex !== -1) {

        state.users[userIndex].favorites = state.users[userIndex].favorites.filter(
          (fav) => fav.recipeTitle !== recipeTitle
        );
      }

      if (state.currentUser && state.currentUser.id === userId) {
        state.currentUser.favorites = state.currentUser.favorites.filter(
          (fav) => fav.recipeTitle !== recipeTitle
        );
      }
    },
  },
});

export const {
  setProfile,
  setCurrentUser,
  logoutUser,
  setLoading,
  setError,
  addToFavorites,
  removeFromFavorites, 
} = userSlice.actions;

export default userSlice.reducer;