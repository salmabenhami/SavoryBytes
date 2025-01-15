// import { createStore } from "redux";
// import { Provider } from "react-redux";
// import authReducer from "./Signup/ReducerAuth";

// const store = createStore(authReducer);

// const StoreProvider = ({ children }) => (
//   <Provider store={store}>{children}</Provider>
// );

// export default StoreProvider;

import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk'; 
import recipesReducer from './recepiesReducer';

const store = configureStore({
  reducer: {
    recipes: recipesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
