import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/actions/cartActions';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const handleQuantityChange = (e) => {
        dispatch(updateQuantity(item.id, parseInt(e.target.value)));
    };

    return (
        <div className="cart-item">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <input
                type="number"
                value={item.quantity}
                onChange={handleQuantityChange}
                min="1"
            />
            <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
        </div>
    );
};

export default CartItem;
