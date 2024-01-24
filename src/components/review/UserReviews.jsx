import React, {useContext, useEffect, useState} from 'react';
import ReviewEntry from "./ReviewEntry.jsx";
import {ProductDataContext} from "../../context/ProductContext.jsx";
import {useNavigate} from "react-router-dom";
import UserReviewsPagination from "./UserReviewsPagination.jsx";

function UserReviews(props) {
    const {productData} = useContext(ProductDataContext);
    const navigate = useNavigate();
    const [sortBy, setSortBy] = useState('highestRating');

    const handleSortChange = (event) => {
        const currentUrlParams = new URLSearchParams(window.location.search);
        currentUrlParams.set('sortBy', event.target.value);
        if (currentUrlParams.has('reviewPage')) {
            currentUrlParams.set('reviewPage', '1');
        }
        navigate(`${window.location.pathname}?${currentUrlParams.toString()}`);
    }


    useEffect(() => {
        const currentUrlParams = new URLSearchParams(location.search);
        const sortByParam = currentUrlParams.get('sortBy');
        if (sortByParam) {
            setSortBy(sortByParam);
        }
    }, [location.search]);


    return (
        <div className={"flex flex-col gap-2 w-full"}>
            <div className={" w-full flex gap-1 mb-[8px]"}>
                <span>Sort by:</span>
                <select className={"border-none outline-none text-typography-light"} onChange={handleSortChange}
                        value={sortBy}
                >
                    <option value="highestRating">Highest Rating</option>
                    <option value="lowestRating">Lowest Rating</option>
                    <option value="onlyPictures">Only Pictures</option>
                    <option value="mostHelpful">Most Helpful</option>
                </select>
            </div>
            <div>
                {productData?.reviews?.map((userReview, index) => {
                    return <ReviewEntry key={index} userReview={userReview}/>
                })}
                {productData?.reviews?.length === 0 && <div className={"text-center  border-t border-light-gray py-[50px]"}>No reviews found</div>}

                    </div>
                    <UserReviewsPagination/>
                    </div>
                    );
                }

export default UserReviews;