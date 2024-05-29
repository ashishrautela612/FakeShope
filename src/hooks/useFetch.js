import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setProducts(json);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        
        getProducts();
    }, []);

    return [products];
};

export default useFetch;