import { createStore, applyMiddleware } from "redux";
import { loginReducer } from "./reducers/login-reducer";
import thunk from 'redux-thunk';



const configureStore = () => {
    const store = createStore(loginReducer,  applyMiddleware(thunk));
    return store;
}

export default configureStore;