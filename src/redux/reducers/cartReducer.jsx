// src/redux/reducers/cartReducer.js

const initialState = {
    cartItems: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            // Check if item is already in the cart
            const existingItem = state.cartItems.find((item) => item.id === action.payload.id);
            if (existingItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((item) =>
                        item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
                    ),
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
                };
            }

        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item.id !== action.payload),
            };

        case 'UPDATE_QUANTITY':
            return {
                ...state,
                cartItems: state.cartItems.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, quantity: action.payload.quantity }
                        : item
                ),
            };

        default:
            return state;
    }
};

export default cartReducer;
