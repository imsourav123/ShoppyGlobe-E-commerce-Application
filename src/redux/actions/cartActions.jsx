// src/redux/actions/cartActions.js

// Add to Cart
export const addToCart = (product) => ({
    type: 'ADD_TO_CART',
    payload: product,
});

// Remove from Cart
export const removeFromCart = (productId) => ({
    type: 'REMOVE_FROM_CART',
    payload: productId,
});

// Update Quantity
export const updateQuantity = (productId, quantity) => ({
    type: 'UPDATE_QUANTITY',
    payload: { id: productId, quantity },
});
