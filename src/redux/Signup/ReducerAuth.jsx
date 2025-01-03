const initialState = {
  isAuthenticated: false,
  currentUser: null,
  users: [ 
    {
      id: 1,
      name: "Alice Doe",
      email: "alice@example.com",
      password: '1234',
      role: "admin",
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob@example.com",
      password: '1234',
      role: "user",
    },
  ],
  error: null,
  loading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        users: [...state.users, action.payload],
        error: null,
      };

    case "SIGNUP_FAILURE":
      return {
        ...state,
        error: action.payload,
      };
    case "LOGIN_SUCCESS":
      return { ...state, isAuthenticated: true, currentUser: action.payload };
    case "LOGIN_FAILURE":
      return {
        ...state,
        error: action.payload,
      };
    case "LOGOUT":
      return { ...state, isAuthenticated: false, currentUser: null };
    default:
      return state;
  }
};

export default authReducer;
