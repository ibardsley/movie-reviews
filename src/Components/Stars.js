import React, { useState } from 'react';

const StarRating = () => {
    const [rating, setRating] = useState(0);
    return (
        <div className='star-rating'>
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                <button
                    type="button"
                    key={index}
                    className={index <= rating ? "on" : "off"}
                    onClick={() => setRating(index)}
                    >
                <i className="fa fa-star" aria-hidden="true"></i>
                </button>
                );
            })}
        </div>
    );
};

export default StarRating;