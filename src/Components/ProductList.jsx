import React from 'react';
import useFetchProducts from '../hooks/useFetchProducts';
import ProductItem from './ProductItem';

const ProductList = () => {
    const { products, loading, error } = useFetchProducts();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="product-list">
            {products.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
