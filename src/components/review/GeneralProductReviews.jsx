import React, {useContext} from 'react';
import StarReview from "./StarReview.jsx";
import StarRatio from "./StarRatio.jsx";
import {ProductDataContext} from "../../context/ProductContext.jsx";
import AddReviewButton from "./AddReviewButton.jsx";

function GeneralProductReviews(props) {
    const {productData} = useContext(ProductDataContext);
    return (
            <div className={"flex-col gap-[25px] lg:gap-0 lg:flex-row flex justify-between items-center"}>

                <div className={"flex flex-col gap-1"}>
                    <div className={"flex gap-1"}>
                        <StarReview rating={productData?.average_rating}/>
                        <span className={"text-typography-dark"}>{productData?.average_rating}</span>
                    </div>
                    <p className={"text-[14px] text-typography-light lead-[21px] font-light text-center"}>Based on {productData?.review_count} reviews</p>
                </div>

                <StarRatio />
                <div>
                    <AddReviewButton />
                </div>
            </div>
    );
}

export default GeneralProductReviews;