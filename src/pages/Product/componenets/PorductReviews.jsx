import React, {useContext} from 'react';
import GeneralProductReviews from "../../../components/review/GeneralProductReviews.jsx";
import UserReviews from "../../../components/review/UserReviews.jsx";
import {ProductDataContext} from "../../../context/ProductContext.jsx";

function ProductReviews(props) {

    return (
        <div className={"flex flex-col mt-4 sm:px-[50px] md:px-[100px] lg:px-[200px]"}>
            <h2 className={"text-center text-[31px] font-semibold lead-[37px]  tracking-[0.248px] mb-[40px] lg:mb-[60px]"}>Customer
                Reviews</h2>
            <div>
                <GeneralProductReviews/>
            </div>
            <div className={"mt-[40px]"}>
                <UserReviews/>
            </div>

        </div>
    );
}

export default ProductReviews;