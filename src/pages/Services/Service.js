
import React from 'react';

const Service = ({ service }) => {
    const { title, picture, price, description, ratings } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={picture} className='w-full' alt='' /></figure>
            <div className="card-body">
                <h2 className="card-title text-orange-700 text-4xl"> Service Name: {title}</h2>
                <h4 className='text-yellow-400'>Price: ${price}</h4>
                <p>{description}</p>
                <h5 className='flex'>Ratings: <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-400">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg></span> <span>{ratings}</span>
                </h5>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;