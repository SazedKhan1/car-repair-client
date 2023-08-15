import React from 'react';

const BannerItem = ({ slide }) => {
    const { image, id, prev, next } = slide
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <img src={image} alt='' className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 top-2/4">
                <h1 className='text-5xl text-white'>Affordable <br />
                    price for car <br />
                    servicing
                </h1>
            </div>
            <div className="absolute flex justify-between w-1/2 transform -translate-y-1/2 left-5 top-2/3">
                <p className='text-white'>Workers at the first collision shop the car was taken to “had no idea what they were doing when it came to the technology,” because they lacked access to Porsche's parts catalog, says Mehizadeh </p>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 top-3/4">
                <button className="btn btn-outline btn-warning mr-5">Warning</button>
                <button className="btn btn-outline btn-warning">Warning</button>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 right-5 top-1/2">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;