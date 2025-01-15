
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
      profilePicture:"",
      bio:'',
      joinedDate: "2023-01-10",

    },
    {
      id: 2,
      username: "Bob Smith",
      email: "bob@example.com",
      password: '1234',
      role: "user",
      profilePicture: "",
      bio:'',
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
      console.log(action.payload)
      return { ...state, isAuthenticated: true, currentUser: action.payload };
    case "LOGIN_FAILURE":
      return {
        ...state,
        error: action.payload,
      };
    case "LOGOUT":
      return { ...state, isAuthenticated: false, currentUser: null };
    case "ADD_USER":
      return { ...state,
        users: [...state.users,action.payload,]
      };
    case "REMOVE_USER":
      return{
        ...state,
        users:state.users.filter((u)=> u.id !== action.payload)
      }
    case "UPDATE_USER":
      return{
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id
              ? { ...user, username: action.payload.username, email: action.payload.email, role: action.payload.role }  
              : user
      ),
      }
    default:
      return state;
  }
};

export default authReducer;
