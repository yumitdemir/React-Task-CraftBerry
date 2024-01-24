import React, {useContext} from 'react';
import StarReview from "./StarReview.jsx";
import ProgressBar from "../common/ProgressBar.jsx";
import { useLocation, useNavigate } from 'react-router-dom';
import {ProductDataContext} from "../../context/ProductContext.jsx";

function StarRatio(props) {
    const {productData} = useContext(ProductDataContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleStarClick = (starRating) => {
        navigate({
            search: `?sortBy=${starRating}star`
        });
    };

    const renderStarRating = (starRating, reviewCount) => {
        const totalReviewCount = productData?.fiveStarReviewCount + productData?.fourStarReviewCount + productData?.threeStarReviewCount + productData?.twoStarReviewCount + productData?.oneStarReviewCount;
        const progress = (reviewCount / totalReviewCount) * 100;
        const searchParams = new URLSearchParams(location.search);
        const sortBy = searchParams.get('sortBy');
        const isSelected = sortBy === `${starRating}star`;

        return (
            <div className={`flex gap-[17px]  px-1 hover:bg-light-gray hover:bg-opacity-20 rounded-3xl  ${isSelected ? 'bg-light-gray rounded-3xl bg-opacity-20' : 'cursor-pointer'}`} onClick={() => handleStarClick(starRating)}>
                <StarReview rating={starRating} startSize={15}/>
                <div className={"w-[142px] flex items-center"}>
                    <ProgressBar progress={progress}/>
                </div>
                <span className={"text-typography-dark text-[12px] lead-[18px]"}>{reviewCount}</span>
            </div>
        );
    };

    return (
        <div className={"flex flex-col gap-[17px] justify-center  "}>
            {renderStarRating(5, productData?.fiveStarReviewCount)}
            {renderStarRating(4, productData?.fourStarReviewCount)}
            {renderStarRating(3, productData?.threeStarReviewCount)}
            {renderStarRating(2, productData?.twoStarReviewCount)}
            {renderStarRating(1, productData?.oneStarReviewCount)}
        </div>
    );
}

export default StarRatio;