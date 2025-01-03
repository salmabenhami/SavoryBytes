import { createStore } from "redux";
import { Provider } from "react-redux";
import authReducer from "./Signup/ReducerAuth";

const store = createStore(authReducer);

const StoreProvider = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

export default StoreProvider;
