import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  currentUser: null,
  users: [
    {
      id: 1,
      username: "Alice Doe",
      email: "alice@example.com",
      password: '1234',
      role: "admin",
      profilePicture: "",
      bio: '',
      joinedDate: "2023-01-10",
    },
    {
      id: 2,
      username: "Bob Smith",
      email: "bob@example.com",
      password: '1234',
      role: "user",
      profilePicture: "",
      bio: '',
      joinedDate: "2024-01-10",
    },
    {
      id: 3,
      username: "FoodLover123",
      email: "foodlover123@example.com",
      password: '1234',
      role: "user",
      profilePicture: '',
      bio: "Passionate about discovering new flavors and recipes.",
      joinedDate: "2024-01-10",
    },
    {
      id: 4,
      username: "CulinaryExplorer",
      email: "culinaryexplorer@example.com",
      password: '1234',
      role: "user",
      profilePicture: '',
      bio: "Exploring the world one dish at a time.",
      joinedDate: "2023-08-22",
    },
    {
      id: 5,
      username: "HealthyEater",
      email: "healthyeater@example.com",
      password: '1234',
      role: "user",
      profilePicture: '',
      bio: "Dedicated to healthy and delicious cooking.",
      joinedDate: "2024-03-17",
    },
  ],
  error: null,
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signupSuccess(state, action) {
      state.users.push(action.payload);
      state.error = null;
    },
    signupFailure(state, action) {
      state.error = action.payload;
    },
    loginSuccess(state, action) {
      state.isAuthenticated = true;
      state.currentUser = action.payload;
    },
    loginFailure(state, action) {
      state.error = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.currentUser = null;
    },
    addUser(state, action) {
      state.users.push(action.payload);
    },
    removeUser(state, action) {
      state.users = state.users.filter((u) => u.id !== action.payload);
    },
    updateUser(state, action) {
      const { id, username, email, role } = action.payload;
      const user = state.users.find((u) => u.id === id);
      if (user) {
        user.username = username;
        user.email = email;
        user.role = role;
      }
    },
  },
});

export const {
  signupSuccess,
  signupFailure,
  loginSuccess,
  loginFailure,
  logout,
  addUser,
  removeUser,
  updateUser,
} = authSlice.actions;

export default authSlice.reducer;
