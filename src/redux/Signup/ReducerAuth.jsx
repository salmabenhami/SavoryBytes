import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  currentUser: null,
  searchList:null,
  users: [
    {
      id: 1,
      username: "Alice Doe",
      email: "alice@example.com",
      password: '1234',
      role: "admin",
      profilePicture: "",
      bio: "i'm the admin",
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
      const user = state.users.find((u) => u.id === action.payload.id);
      if (user) {
        state.isAuthenticated = true;
        state.currentUser = user;
      } else {
        state.error = "User not found";
      }
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
      if (state.currentUser.id !== action.payload) {
          state.users = state.users.filter((u) => u.id !== action.payload);
      } else {
          alert("An Admin cannot delete themselves.");
      }
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
    
    searchuser(state, action){
      return{
        ...state,
        searchList: state.users.filter((user)=> user.username.toLocaleLowerCase().includes(action.payload) || user.email.includes(action.payload))
      }
    },
    sortdate(state, action){
      const sortOrder = action.payload;
      if (sortOrder === 'asc') {
        return {
          ...state,
          users: [...state.users].sort((a, b) => new Date(a.joinedDate) - new Date(b.joinedDate)),
        };
      } else if (sortOrder === 'desc') {
        return {
          ...state,
          users: [...state.users].sort((a, b) => new Date(b.joinedDate) - new Date(a.joinedDate)),
        };
      }
        return state;
    },
    sortrole(state, action){
      const sortOrder = action.payload;
      if (sortOrder === 'asc') {
        return {
          ...state,
          users: [...state.users].sort((a, b) => a.role.localeCompare(b.role)),
        };
      } else if (sortOrder === 'desc') {
        return {
          ...state,
          users: [...state.users].sort((a, b) => b.role.localeCompare(a.role)),
        };
      }
      return state;
    },
    setProfile(state, action) {
      const { id, ...updatedData } = action.payload;

      // Update the currentUser if it matches the ID
      if (state.currentUser && state.currentUser.id === id) {
        state.currentUser = { ...state.currentUser, ...updatedData };
      }

      // Update the user in the users array if needed
      const userIndex = state.users.findIndex((user) => user.id === id);
      if (userIndex !== -1) {
        state.users[userIndex] = { ...state.users[userIndex], ...updatedData };
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
  sortdate,
  searchuser,
  sortrole,
  setProfile
} = authSlice.actions;

export default authSlice.reducer;
