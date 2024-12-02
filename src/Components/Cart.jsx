import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/actions/cartActions';
import './Cart.css'

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    };

    const handleQuantityChange = (id, quantity) => {
        if (quantity > 0) {  // Prevent negative or zero quantities
            dispatch(updateQuantity(id, quantity));
        }
    };

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                        <img src={item.image} alt="" />
                        <h3>{item.title}</h3>
                        <p>Price: ${item.price}</p>
                        <div className="quantity-controls">
                            <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                        </div>
                        <button onClick={() => handleRemove(item.id)} className="remove-btn">Remove</button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;
