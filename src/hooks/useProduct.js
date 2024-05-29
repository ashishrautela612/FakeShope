import { useEffect, useState } from "react";

const useProduct = (url) => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setProduct(json);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        
        getProduct();
    }, []);

    return product;
};

export default useProduct;