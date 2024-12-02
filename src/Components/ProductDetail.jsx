import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductDetail.css'

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => setProduct(response.data))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!product) return <p>Product not found.</p>;

    return (
        <div className="product-detail">
            <img src={product.image} alt={product.title} />
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <h3>${product.price}</h3>
            <button>Add to Cart</button>
        </div>
    );
};

export default ProductDetail;
