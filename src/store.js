import { createStore } from 'redux';
import cartReducer from './statemanagement/cartReducers';
const store = createStore(cartReducer);

export default store;