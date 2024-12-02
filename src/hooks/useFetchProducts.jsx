import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => setProducts(response.data))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    return { products, loading, error };
};

export default useFetchProducts;
