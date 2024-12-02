import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';  // Import your action
import './ProductItem.css'

const ProductItem = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));  // Dispatch the action with the product
    };

    return (
        <div className="product-item">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default ProductItem;
