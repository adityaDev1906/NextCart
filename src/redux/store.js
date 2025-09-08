// import {createStore} from 'redux'
import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './rootReducer';
import productSaga from './productSaga'
import createSagaMiddleware from 'redux-saga';
import { saveCartToLocalStorage, loadCartFromLocalStorage } from './localStorage';

// Load initial cart state from local storage
const persistedCart = loadCartFromLocalStorage();

// const store = createStore(rootReducer);
const sagaMiddleware = createSagaMiddleware();
const store  = configureStore({
    reducer:rootReducer,
    middleware:()=>[sagaMiddleware]
});

// Subscribe to store changes to save the cart to local storage
store.subscribe(() => {
    const state = store.getState();
    saveCartToLocalStorage(state.cartData);
  });

// Run the saga middleware
sagaMiddleware.run(productSaga);

export default store;