import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY  } from "./constant"
import { loadCartFromLocalStorage } from './localStorage';

const initialState = loadCartFromLocalStorage(); // or an empty array []

export const cartData = (data = initialState  , action) => {
    switch (action.type) {
            case ADD_TO_CART:
                console.warn("ADD_TO_CART condition ", action)
                const existingItem = data.find(item => item.id === action.data.id);
                if (existingItem) {
                    // If the item exists, update its quantity
                    return data.map(item =>
                    item.id === action.data.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                    );
                } else {
                    // Otherwise, add a new item with quantity 1
                    return [
                    ...data,
                    { ...action.data, quantity: 1 }
                    ];
                }
                // return [ action.data,...data];
            

                case INCREMENT_QUANTITY: 
                    return data.map(item =>
                      item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                    );
                  
            
                case DECREMENT_QUANTITY: 
                    return data.map(item => {
                      if (item.id === action.payload.id) {
                        const newQuantity = item.quantity - 1;
                        // If quantity is greater than 1, return updated quantity
                        return newQuantity > 0
                          ? { ...item, quantity: newQuantity }
                          : null; // Return null to filter it out later
                      }
                      return item;
                    }).filter(item => item !== null); // Remove items with null quantity
                  

            case REMOVE_FROM_CART:
                console.warn("REMOVE_FROM_CART condition ", action);
                // data.length= data.length? data.length-1:[]
                const remainingItems= data.filter((item)=>item.id!==action.data)
                return [...remainingItems]
            
            case EMPTY_CART:
                console.warn("EMPTY CART condition ", action);
                data =[]
                return [...data]

            default:
                return data
    }
}