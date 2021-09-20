import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import cartReducers from "./reducers/cartReducers";
import productReducer from "./reducers/productReducer";
import thunk from "redux-thunk";

const reducer = combineReducers({
    products : productReducer,
    cart : cartReducers,
  
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;