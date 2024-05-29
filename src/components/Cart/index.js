import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart, clearCart } from '../../stores/actions/cart';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="p-4">
      {cart.length === 0 ? (
        <p className='pb-8 text-xl font-medium'>Your cart is empty</p>
      ) : (
        <div className='pb-8'>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center mb-4">
                <img src={item.image} alt={item.title} className="w-16 h-16 object-cover"  style={{height:"130px"}}/>
                <div className="ml-4">
                  <h5 className='text-xl'>{item.title}</h5>
                  <p className='text-xl'><span className='font-bold'>Total Price:</span> ${item.price} x ({item.quantity} items)=<span className='font-bold'>${item.price*item.quantity}</span></p>
                </div>
                <button onClick={() => handleRemoveFromCart(item.id)} className="cart rounded mr-2 px-4 py-2">Remove</button>
              </li>
            ))}
          </ul>
          <button onClick={handleClearCart} className="cart rounded mr-2 px-4 py-2  mt-4">Clear Cart</button>
        </div>
      )}
      <Link to="/" className="cart rounded mr-2 px-4 py-2 my-8">Continue Shopping</Link>
    </div>
  );
};

export default Cart;
