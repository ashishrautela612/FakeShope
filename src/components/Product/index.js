import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import useProduct from '../../hooks/useProduct';
import { PRODUCT_API } from '../../utils/constants';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../stores/actions/cart';
import "./Product.css";
import { ProductShimmer } from '../Shimmer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Import CSS for toast notifications

const Product = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    const dispatch = useDispatch();
    const response = useProduct(`${PRODUCT_API}/${id}`);

    useEffect(() => {
        if (response) {
            setProduct(response);
        }
    }, [response]);

    const handleAddToCart = () => {
        // Dispatch action to add item to cart
        dispatch(addItemToCart(product));
        // Show toast notification
        toast('Item added to cart!', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };

    if (!product) return <ProductShimmer />;

    return (
        <div className="flex justify-center">
            <div className="w-full md:w-3/4 lg:w-2/3">
                <Link className="text-decoration-none text-dark" to={`/`}>
                    <div className="flex items-center m-3">
                        <i className="fa fa-long-arrow-left"></i>
                        <span className="ml-1">&nbsp;Back</span>
                    </div>
                </Link>
                <div className="flex">
                    <div className="p-3 w-1/2">
                        <div className="text-center p-4">
                            <img id="main-image" alt="product" src={product?.image} width="250" />
                        </div>
                    </div>
                    <div className="border p-4 w-1/2">
                        <div className="mt-4 mb-3">
                            <p className="text-left capitalize text-gray-500 pb-3"> in {product?.category}</p>
                            <h5 className="text-left capitalize text-2xl font-medium pb-3">
                                {product?.title}
                            </h5>
                            <div className="flex items-center pb-3">
                                Rating {product?.rating?.rate}
                                <i className="fa fa-star text-yellow-400"></i>
                            </div>
                            <div className="flex items-center mt-2">
                                <big className="text-5xl font-medium">${product?.price}</big>
                            </div>
                        </div>
                        <p className="text-muted text-left text-gray-500">{product?.description}</p>
                        <div className="flex items-center mt-4">
                            <button className="cart rounded text-uppercase mr-2 px-4 py-2" onClick={handleAddToCart}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer autoClose={500} theme="dark"/>
        </div>
    );
};

export default Product;
