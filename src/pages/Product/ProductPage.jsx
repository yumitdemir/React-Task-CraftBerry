import React, {useContext, useEffect} from 'react';
import ProductDetail from "./componenets/ProductDetail.jsx";
import StarReview from "../../components/review/StarReview.jsx";
import GeneralProductReviews from "../../components/review/GeneralProductReviews.jsx";
import ProductReviews from "./componenets/PorductReviews.jsx";
import {useLoaderData, useParams} from "react-router-dom";
import {ProductDataContext, ProductDataProvider} from "../../context/ProductContext.jsx";

function ProductPage(props) {
    const product = useLoaderData();
    const {productData, setProductData} = useContext(ProductDataContext);
    if (product !== null) {
        useEffect(() => {
            setProductData(product.data.product);
        }, [product]);
    }

    return (
        <div className={"container mx-auto px-4 py-8"}>
            {product !== null ? <>
                <ProductDetail/>
                <ProductReviews/>
            </> : <div className={"text-center"}>Product not found</div>
            }

        </div>
    );
}

export default ProductPage;

// loader function for product page using react-router v6
export const productLoader = async ({params, request}) => {
    const reviewsPerPage = 10;

    const sortBy = new URL(request.url).searchParams.get('sortBy');
    let reviewPage = new URL(request.url).searchParams.get('reviewPage');

    const productData = JSON.parse(localStorage.getItem('productData'));
    let product = productData.find(product => product.data.product.handle === params.productHandle);
    if (product) {

        const reviews = product.data.product.reviews;
        const reviewCount = reviews.length;
        const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviewCount;

        product.data.product.review_count = reviewCount;
        product.data.product.average_rating = averageRating.toFixed(1);


        product.data.product.fiveStarReviewCount = product.data.product.reviews.filter(review => review.rating === 5).length;
        product.data.product.fourStarReviewCount = product.data.product.reviews.filter(review => review.rating === 4).length;
        product.data.product.threeStarReviewCount = product.data.product.reviews.filter(review => review.rating === 3).length;
        product.data.product.twoStarReviewCount = product.data.product.reviews.filter(review => review.rating === 2).length;
        product.data.product.oneStarReviewCount = product.data.product.reviews.filter(review => review.rating === 1).length;


        switch (sortBy) {
            case 'lowestRating':
                product.data.product.reviews.sort((a, b) => a.rating - b.rating);
                break;
            case 'onlyPictures':
                product.data.product.reviews = product.data.product.reviews.filter(review => review.includes_image);
                break;
            case 'mostHelpful':
                product.data.product.reviews.sort((a, b) => b.like_count - a.like_count);
                break;
            case '5star':
                product.data.product.reviews = product.data.product.reviews.filter(review => review.rating === 5);
                break;
            case '4star':
                product.data.product.reviews = product.data.product.reviews.filter(review => review.rating === 4);
                break;
            case '3star':
                product.data.product.reviews = product.data.product.reviews.filter(review => review.rating === 3);
                break;
            case '2star':
                product.data.product.reviews = product.data.product.reviews.filter(review => review.rating === 2);
                break;
            case '1star':
                product.data.product.reviews = product.data.product.reviews.filter(review => review.rating === 1);
                break;
            case 'highestRating':
                product.data.product.reviews.sort((a, b) => b.rating - a.rating);
                break;
            default:
                product.data.product.reviews.sort((a, b) => b.rating - a.rating);
                break;
        }
        product.data.product.total_review_pages = Math.ceil(product.data.product.reviews.length / reviewsPerPage);

        reviewPage = reviewPage || '1';
        const start = (reviewPage - 1) * reviewsPerPage;
        const end = reviewPage * reviewsPerPage;
        product.data.product.reviews = product.data.product.reviews.slice(start, end);
        product.data.product.current_review_page = reviewPage;
        return product;
    } else {
        return null;
    }
}