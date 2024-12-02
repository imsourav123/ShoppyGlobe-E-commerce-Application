import { createStore, combineReducers } from 'redux';
import cartReducer from './reducers/cartReducer';

const rootReducer = combineReducers({
    cart: cartReducer,  // Add the cart reducer
});

const store = createStore(rootReducer);

export default store;
