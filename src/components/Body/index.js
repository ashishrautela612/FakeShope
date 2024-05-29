import React, { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import Card from '../Card';
import { FAKE_STORE_API } from '../../utils/constants';
import { Shimmer } from '../Shimmer';

const Body = () => {
    const [products, setProducts] = useState(null);
    const [data, setData] = useState(null);
    const [fetchedProducts] = useFetch(FAKE_STORE_API);

    useEffect(() => {
        if (fetchedProducts) {
            setProducts(fetchedProducts);
            setData(fetchedProducts);
        }
    }, [fetchedProducts]);

    const filterProducts = category => {
        const filetredProducts = data.filter((product) => {
            return product.category === category;
        })
        setProducts(filetredProducts)
    }

    if(!products) return <Shimmer/>
    return (
        <>
            <div className='flex px-12 gap-3'>
                <div className='pt-8 flex flex-col gap-3 sticky top-3 text-sm' style={{ height: 'calc(100vh - 3rem)' }}>
                    <div className='flex gap-3 '>
                        <button className='cart rounded px-1 py-1' onClick={() => setProducts(data)}>All</button>
                        <button className='cart rounded px-1 py-1' onClick={() => filterProducts("men's clothing")}>Men's Clothing</button>
                    </div>
                    <div className='flex gap-3'>
                        <button className='cart rounded px-1 py-1' onClick={() => filterProducts("electronics")}>
                            Eletronics
                        </button>
                        <button className='cart rounded px-1 py-1' onClick={() => filterProducts("jewelery")}>Jewelery</button>
                    </div>
                    <div className='flex gap-3'>
                        <button className='cart rounded px-1 py-1' onClick={() => filterProducts("women's clothing")}>Women's Clothing</button>
                    </div>
                </div>
                <div className='container flex gap-8 py-8 flex-wrap'>
                    {products.map((product) => (
                        <Card
                            key={product.id}
                            title={product.title}
                            imageSrc={product.image}
                            price={product.price}
                            id={product}
                        />
                    ))}
                </div>
            </div>
        </>

    );
};

export default Body;
