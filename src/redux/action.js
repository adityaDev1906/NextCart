import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY } from "./constant"

export const addToCart = (data) => {
    console.warn("action is called", data)
    return {
        type: ADD_TO_CART,
        data
    }
}
export const removeToCart = (data) => {
    console.warn("action removeToCart", data)
    return {
        type: REMOVE_FROM_CART,
        data
    }
}
export const incrementQuantity = (id) => {
    console.warn("action incrementQuantity", id)
    return {
        type: INCREMENT_QUANTITY,
        payload: { id },
    }
    //Need to add code for increment
}
export const decrementQuantity = (id) => {
    console.warn("action decrementQuantity", id)
    return {
        type: DECREMENT_QUANTITY,
        payload: { id },
    }
    //Need to add code for decrement
}
export const emptyCart = () => {
    console.warn("action emptyCart",)
    return {
        type: EMPTY_CART,
    }
}
