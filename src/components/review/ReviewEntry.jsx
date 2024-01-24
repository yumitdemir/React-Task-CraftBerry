import React, {useContext} from 'react';
import StarReview from "./StarReview.jsx";
import {LiaCircleNotchSolid, LiaThumbsDown, LiaThumbsDownSolid, LiaThumbsUpSolid} from "react-icons/lia";
import {ProductDataContext} from "../../context/ProductContext.jsx";

function ReviewEntry({userReview}) {
    const {productData, setProductData} = useContext(ProductDataContext);

    const handleLikeClick = () => {
        let newProductData = {...productData};

        newProductData.reviews = newProductData.reviews.map(review => {
            if (review.username === userReview.username && review.published_date === userReview.published_date) {
                return {...review, like_count: review.like_count + 1};
            } else {
                return review;
            }
        });

        let localStorageData = JSON.parse(localStorage.getItem('productData'));

        localStorageData.forEach(product => {
            if (product.data.product.handle === productData.handle) {
                product.data.product.reviews.forEach(review => {
                    if (review.username === userReview.username && review.published_date === userReview.published_date) {
                        review.like_count++;
                    }
                });
            }
        });

        localStorage.setItem('productData', JSON.stringify(localStorageData));

        setProductData(newProductData);
    }

    const handleDislikeClick = () => {
        let newProductData = {...productData};

        newProductData.reviews = newProductData.reviews.map(review => {
            if (review.username === userReview.username && review.published_date === userReview.published_date) {
                return {...review, dislike_count: review.dislike_count + 1};
            } else {
                return review;
            }
        });

        let localStorageData = JSON.parse(localStorage.getItem('productData'));

        localStorageData.forEach(product => {
            if (product.data.product.handle === productData.handle) {
                product.data.product.reviews.forEach(review => {
                    if (review.username === userReview.username && review.published_date === userReview.published_date) {
                        review.dislike_count++;
                    }
                });
            }
        });

        localStorage.setItem('productData', JSON.stringify(localStorageData));

        setProductData(newProductData);
    }





    return (
        <div className="grid grid-cols-12 gap-4 py-[20px]  border-t border-light-gray">
            <div className={"col-span-12 lg:col-span-3 flex flex-col gap-[14px]"}>
                <StarReview rating={userReview?.rating}/>
                <p className={"text-typography-dark font-medium leading-[24px]"}>{userReview?.username}</p>
                <span className={"text-typography-light text-[14px] leading-[24px]"}>{userReview?.published_date}</span>
            </div>
            <div className={"col-span-12 lg:col-span-9 flex flex-col gap-[49px]"}>
                <div className={" flex flex-col gap-[14px]"}>
                    <h3 className={"text-[17px] font-semibold leading-[22px]"}>{userReview?.review_title}</h3>
                    <p>{userReview?.comment}</p>
                    {userReview?.includes_image && <img className={"max-h-[120px] max-w-[120px]  flex-shrink-0 "}
                                                        src="/src/assets/productPage/reviewImage-1.png" alt=""/>
                    }
                </div>
                <div className={"flex w-full justify-end items-center gap-[22px] leading-[24px] text-typography-light"}>
                    <span>Was this helpful?</span>
                    <div className={"flex gap-[8px]  text-typography-dark cursor-pointer select-none"} onClick={handleLikeClick}>
                        <LiaThumbsUpSolid size={24}/>
                        <span>{userReview?.like_count}</span>
                    </div>
                    <div className={"flex gap-[8px] text-typography-dark cursor-pointer select-none"} onClick={handleDislikeClick}>
                        <LiaThumbsDownSolid size={24}/>
                        <span>{userReview?.dislike_count}</span>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ReviewEntry;