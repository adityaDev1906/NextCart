import { SET_PRODUCT_LIST } from "./constant"
// This Reducer is basically for adding all the data to the product_list page


export const productData = (data = [], action) => {
    switch (action.type) {
            case SET_PRODUCT_LIST:
                console.warn("PRODUCT_LIST condition ", action)
                return [...action.data]
        default:
            return data
    }
}