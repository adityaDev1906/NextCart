// (Combines cart actions and reducer)
import { createSlice } from '@reduxjs/toolkit';
import { loadCartFromLocalStorage } from '../../utils/localStorage';

// Load the initial state from local storage.
const initialState = loadCartFromLocalStorage() || [];

// createSlice automatically generates action creators and action types for you.
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // Redux Toolkit uses Immer, so you can write "mutating" logic that is
        // safely translated into immutable updates behind the scenes.
        addToCart: (state, action) => {
            const existingItem = state.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            // The filter method creates a new array, so this is also valid.
            return state.filter(item => item.id !== action.payload);
        },
        incrementQuantity: (state, action) => {
            const item = state.find(item => item.id === action.payload);
            if (item) {
                item.quantity += 1;
            }
        },
        decrementQuantity: (state, action) => {
            const item = state.find(item => item.id === action.payload);
            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    // This creates a new state array without the item.
                    return state.filter(cartItem => cartItem.id !== action.payload);
                }
            }
        },
        emptyCart: () => {
            return [];
        },
    },
});

// Export the actions from the slice.
export const {
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    emptyCart,
} = cartSlice.actions;

// Export the reducer as the default export.
export default cartSlice.reducer;