import React from 'react';
import {FaStar, FaStarHalfAlt, FaRegStar} from "react-icons/fa";

function StarReview({rating , startSize = 20}) {
    const roundedRating = Math.floor(rating);
    const isHalf = rating % 1 !== 0;
    const stars = [...Array(5)].map((star, i) => {
        const starNumber = i + 1;
        if (starNumber <= roundedRating) {
            return <FaStar size={startSize} style={{color: '#F9D34D'}} key={i} />;
        } else if (isHalf && starNumber === roundedRating + 1) {
            return <FaStarHalfAlt size={startSize} style={{color: '#F9D34D'}} key={i} />;
        } else {
            return <FaRegStar size={startSize} style={{color: '#CBC8C9'}} key={i} />;
        }
    });

    return (
        <div className={"flex"}>
            {stars}
        </div>
    );
}

export default StarReview;