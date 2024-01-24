import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";
import {ProductDataContext} from "../../context/ProductContext.jsx";

function UserReviewsPagination(props) {
    const navigate = useNavigate();
    const {productData} = useContext(ProductDataContext);

    const goToPage = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= productData.total_review_pages) {
            const currentUrlParams = new URLSearchParams(window.location.search);
            currentUrlParams.set('reviewPage', pageNumber);
            navigate(window.location.pathname + '?' + currentUrlParams.toString());
        }
    }

    const nextPageBtnHandler = () => {
        const nextPage = Number(productData.current_review_page) + 1;
        goToPage(nextPage);
    }

    const prevPageBtnHandler = () => {
        const prevPage = Number(productData.current_review_page) - 1;
        goToPage(prevPage);
    }
    return (
        <div className={"flex gap-[20px] items-center justify-center w-full flex-wrap"}>
            {
                Number(productData?.current_review_page) > 1 && <button onClick={prevPageBtnHandler}>
                    <img src="/src/assets/productPage/Frame.svg" alt="" className={"cursor-pointer rotate-180"}/>
                </button>
            }

            {productData?.total_review_pages ? [...Array(productData.total_review_pages).keys()].map(i => {
                let pageNumber = i + 1;
                let isActive = pageNumber === Number(productData.current_review_page);
                return <p key={i} onClick={() => goToPage(pageNumber)}
                          className={"cursor-pointer px-[12px] py-[3px]  " + (isActive ? ' rounded-full font-medium bg-primary text-typography-white' : 'text-typography-light ')}>{pageNumber}</p>
            }) : []}
            {
                productData?.total_review_pages > productData?.current_review_page &&  <button onClick={nextPageBtnHandler}
                ><img src="/src/assets/productPage/Frame.svg" alt="" className={"cursor-pointer"}/>
                </button>
            }
        </div>

    );
}

export default UserReviewsPagination;