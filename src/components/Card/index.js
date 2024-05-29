import React from 'react';
import "./Card.css";
import { Link } from 'react-router-dom';

const Card = (props) => {
    return (
        <div className='card flex flex-col justify-center items-center py-6 gap-3 px-6 cursor-pointer'>
            <img src={props.imageSrc} alt="product" className="card-image" />
            <div className='card-details flex flex-col gap-6 w-full'>
                <p className=' card-title text-left' style={{ fontSize: "1rem" }}>
                {props.title.substring(0, 50)}...
                </p>
                <div className='flex justify-between items-center pt-3'>
                    <h5 className='font-bold'>{`$ ${props.price}`}</h5>
                     <Link to={`/product/${props.id.id}`}><i className="arrow fa fa-arrow-right p-2 rounded" aria-hidden="true"></i></Link>
                </div>
            </div>
        </div>
    );
};

export default Card;
