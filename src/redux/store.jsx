import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk'; 
import recipesReducer from './recepiesReducer';
import authReducer from './Signup/ReducerAuth';
import userReducer from "./reducerUser"

const store = configureStore({
  reducer: {
    auth: authReducer,
    users: userReducer,
    recipes: recipesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
