import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import categoryReducer from "./category";
import shopReducer from "./shopping";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    counter: counterReducer,
    logged: loggedReducer,
    category: categoryReducer,
    shop: shopReducer,
});

export default rootReducer;