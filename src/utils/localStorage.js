// localStorage.js
export const saveCartToLocalStorage = (cartData) => {
    try {
        localStorage.setItem('cartData', JSON.stringify(cartData));
    } catch (error) {
        console.error('Error saving cart to local storage:', error);
    }
};

export const loadCartFromLocalStorage = () => {
    try {
        const savedCart = localStorage.getItem('cartData');
        if (savedCart === null || savedCart ===  "undefined" ) {
            return []; // Return empty array if no cart exists
        }
        return JSON.parse(savedCart);
    } catch (error) {
        console.error('Error loading cart from local storage:', error);
        return [];
    }
};
