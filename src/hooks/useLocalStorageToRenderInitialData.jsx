import {useState, useEffect} from 'react';

const useLocalStorageToRenderInitialData = () => {
    const key = 'productData';
    const initialValue = [
        {
            "status": "success",
            "message": "Product details retrieved successfully",
            "data": {
                "product": {
                    "handle": "apple-pie-cookie",
                    "title": "Apple Pie Cookie",
                    "description": "This is a sample product description.",
                    "image_link": ["https://cdn.shopify.com/s/files/1/0564/3593/3246/products/applepie2_1.png?v=1705663696", "https://cdn.shopify.com/s/files/1/0564/3593/3246/products/applepienew_1.png?v=1705663696"],
                    "price": 29.99,
                    "price_currency": "USD",
                    "currency_symbol": "$",
                    "reviews": [

                        {
                            "username": "reviewsPerPage",
                            "rating": 3,
                            "comment": "reviewsPerPage",
                            "published_date": "2024-01-23",
                            "like_count": 0,
                            "dislike_count": 0,
                            "includes_image": true,
                            "review_title": "reviewsPerPage",
                            "image_url": {}
                        },
                        {
                            "username": "reviewsPerPage",
                            "rating": 3,
                            "comment": "reviewsPerPage",
                            "published_date": "2024-01-23",
                            "like_count": 0,
                            "dislike_count": 0,
                            "includes_image": true,
                            "review_title": "reviewsPerPage",
                            "image_url": {}
                        },
                        {
                            "username": "reviewsPerPage",
                            "rating": 3,
                            "comment": "reviewsPerPage",
                            "published_date": "2024-01-23",
                            "like_count": 0,
                            "dislike_count": 0,
                            "includes_image": true,
                            "review_title": "reviewsPerPage",
                            "image_url": {}
                        },
                        {
                            "username": "reviewsPerPage",
                            "rating": 3,
                            "comment": "reviewsPerPage",
                            "published_date": "2024-01-23",
                            "like_count": 0,
                            "dislike_count": 0,
                            "includes_image": true,
                            "review_title": "reviewsPerPage",
                            "image_url": {}
                        },
                        {
                            "username": "reviewsPerPage",
                            "rating": 3,
                            "comment": "reviewsPerPage",
                            "published_date": "2024-01-23",
                            "like_count": 0,
                            "dislike_count": 0,
                            "includes_image": true,
                            "review_title": "reviewsPerPage",
                            "image_url": {}
                        },
                        {
                            "username": "reviewsPerPage",
                            "rating": 3,
                            "comment": "reviewsPerPage",
                            "published_date": "2024-01-23",
                            "like_count": 0,
                            "dislike_count": 0,
                            "includes_image": true,
                            "review_title": "reviewsPerPage",
                            "image_url": {}
                        },
                        {
                            "username": "dsaads",
                            "rating": 2,
                            "comment": "tesad2@gmail.com",
                            "published_date": "2024-01-23",
                            "like_count": 0,
                            "dislike_count": 0,
                            "includes_image": true,
                            "review_title": "tesad2@gmail.com",
                            "image_url": {}
                        },
                        {
                            "username": "dsaads",
                            "rating": 2,
                            "comment": "tesad2@gmail.com",
                            "published_date": "2024-01-23",
                            "like_count": 0,
                            "dislike_count": 0,
                            "includes_image": true,
                            "review_title": "tesad2@gmail.com",
                            "image_url": {}
                        },
                        {
                            "username": "dsaads",
                            "rating": 2,
                            "comment": "tesad2@gmail.com",
                            "published_date": "2024-01-23",
                            "like_count": 0,
                            "dislike_count": 0,
                            "includes_image": true,
                            "review_title": "tesad2@gmail.com",
                            "image_url": {}
                        },
                        {
                            "username": "test",
                            "rating": 4,
                            "comment": "tesad@dsasd.com",
                            "published_date": "2024-01-23",
                            "like_count": 0,
                            "dislike_count": 0,
                            "includes_image": true,
                            "review_title": "tesad@dsasd.com",
                            "image_url": {}
                        },
                        {
                            "username": "test",
                            "rating": 1,
                            "comment": "tesad@dsasd.com",
                            "published_date": "2024-01-23",
                            "like_count": 0,
                            "dislike_count": 0,
                            "includes_image": true,
                            "review_title": "tesad@dsasd.com",
                            "image_url": {}
                        },
                        {
                            "username": "test",
                            "rating": 1,
                            "comment": "tesad@dsasd.com",
                            "published_date": "2024-01-23",
                            "like_count": 0,
                            "dislike_count": 0,
                            "includes_image": false,
                            "review_title": "tesad@dsasd.com",
                            "image_url": {}
                        },
                    ],
                    "review_count": 48,
                    "average_rating": "3.3",
                    "fiveStarReviewCount": 21,
                    "fourStarReviewCount": 1,
                    "threeStarReviewCount": 11,
                    "twoStarReviewCount": 0,
                    "oneStarReviewCount": 15,
                    "total_review_pages": 48,
                    "current_review_page": "2"
                }
            }
        }
        , {
            "status": "success",
            "message": "Product details retrieved successfully",
            "data": {
                "product": {
                    "handle": "belgian-hazelnut-cookie",
                    "title": "Belgian Hazelnut Cookie",
                    "description": "This is a sample product description.",
                    "image_link": ["https://cdn.shopify.com/s/files/1/0564/3593/3246/products/BelgianHazelnut_BangCookies.png?v=1705663699", "https://cdn.shopify.com/s/files/1/0564/3593/3246/products/BelgianHazelnut_sliced_BangCookies.png?v=1705663699"],
                    "price": 29.99,
                    "price_currency": "USD",
                    "currency_symbol": "$",
                    "reviews": [

                        {
                            "username": "reviewsPerPage",
                            "rating": 3,
                            "comment": "reviewsPerPage",
                            "published_date": "2024-01-23",
                            "like_count": 0,
                            "dislike_count": 0,
                            "includes_image": true,
                            "review_title": "reviewsPerPage",
                            "image_url": {}
                        },
                        {
                            "username": "reviewsPerPage",
                            "rating": 3,
                            "comment": "reviewsPerPage",
                            "published_date": "2024-01-23",
                            "like_count": 0,
                            "dislike_count": 0,
                            "includes_image": true,
                            "review_title": "reviewsPerPage",
                            "image_url": {}
                        },
                        {
                            "username": "reviewsPerPage",
                            "rating": 3,
                            "comment": "reviewsPerPage",
                            "published_date": "2024-01-23",
                            "like_count": 0,
                            "dislike_count": 0,
                            "includes_image": false,
                            "review_title": "reviewsPerPage",
                            "image_url": {}
                        },
                        {
                            "username": "reviewsPerPage",
                            "rating": 3,
                            "comment": "reviewsPerPage",
                            "published_date": "2024-01-23",
                            "like_count": 0,
                            "dislike_count": 0,
                            "includes_image": true,
                            "review_title": "reviewsPerPage",
                            "image_url": {}
                        },
                        {
                            "username": "reviewsPerPage",
                            "rating": 3,
                            "comment": "reviewsPerPage",
                            "published_date": "2024-01-23",
                            "like_count": 0,
                            "dislike_count": 0,
                            "includes_image": true,
                            "review_title": "reviewsPerPage",
                            "image_url": {}
                        },
                        {
                            "username": "reviewsPerPage",
                            "rating": 3,
                            "comment": "reviewsPerPage",
                            "published_date": "2024-01-23",
                            "like_count": 0,
                            "dislike_count": 0,
                            "includes_image": true,
                            "review_title": "reviewsPerPage",
                            "image_url": {}
                        },
                        {
                            "username": "dsaads",
                            "rating": 2,
                            "comment": "tesad2@gmail.com",
                            "published_date": "2024-01-23",
                            "like_count": 0,
                            "dislike_count": 0,
                            "includes_image": true,
                            "review_title": "tesad2@gmail.com",
                            "image_url": {}
                        },
                        {
                            "username": "dsaads",
                            "rating": 2,
                            "comment": "tesad2@gmail.com",
                            "published_date": "2024-01-23",
                            "like_count": 0,
                            "dislike_count": 0,
                            "includes_image": false,
                            "review_title": "tesad2@gmail.com",
                            "image_url": {}
                        },
                        {
                            "username": "dsaads",
                            "rating": 2,
                            "comment": "tesad2@gmail.com",
                            "published_date": "2024-01-23",
                            "like_count": 0,
                            "dislike_count": 0,
                            "includes_image": true,
                            "review_title": "tesad2@gmail.com",
                            "image_url": {}
                        },
                        {
                            "username": "test",
                            "rating": 4,
                            "comment": "tesad@dsasd.com",
                            "published_date": "2024-01-23",
                            "like_count": 0,
                            "dislike_count": 0,
                            "includes_image": true,
                            "review_title": "tesad@dsasd.com",
                            "image_url": {}
                        },
                        {
                            "username": "test",
                            "rating": 1,
                            "comment": "tesad@dsasd.com",
                            "published_date": "2024-01-23",
                            "like_count": 0,
                            "dislike_count": 0,
                            "includes_image": true,
                            "review_title": "tesad@dsasd.com",
                            "image_url": {}
                        },
                        {
                            "username": "test",
                            "rating": 1,
                            "comment": "tesad@dsasd.com",
                            "published_date": "2024-01-23",
                            "like_count": 0,
                            "dislike_count": 0,
                            "includes_image": false,
                            "review_title": "tesad@dsasd.com",
                            "image_url": {}
                        },
                    ],
                    "review_count": 48,
                    "average_rating": "3.3",
                    "fiveStarReviewCount": 21,
                    "fourStarReviewCount": 1,
                    "threeStarReviewCount": 11,
                    "twoStarReviewCount": 0,
                    "oneStarReviewCount": 15,
                    "total_review_pages": 48,
                    "current_review_page": "2"
                }
            }
        },
        {
            "status": "success",
            "message": "Product details retrieved successfully",
            "data": {
                "product": {
                    "handle": "better-than-oreo-cookie",
                    "title": "Better than Oreo Cookie",
                    "description": "This is a sample product description.",
                    "image_link": ["https://cdn.shopify.com/s/files/1/0564/3593/3246/products/RockyRoadCookie_BangCookies.png?v=1705663702", "https://cdn.shopify.com/s/files/1/0564/3593/3246/products/BetterthanOreocookie_sliced_BangCookies.png?v=1705663702"],
                    "price": 25.99,
                    "price_currency": "USD",
                    "currency_symbol": "$",
                    "reviews": [

                        {
                            "username": "reviewsPerPage",
                            "rating": 3,
                            "comment": "reviewsPerPage",
                            "published_date": "2024-01-23",
                            "like_count": 0,
                            "dislike_count": 0,
                            "includes_image": true,
                            "review_title": "reviewsPerPage",
                            "image_url": {}
                        },
                        {
                            "username": "reviewsPerPage",
                            "rating": 3,
                            "comment": "reviewsPerPage",
                            "published_date": "2024-01-23",
                            "like_count": 0,
                            "dislike_count": 0,
                            "includes_image": true,
                            "review_title": "reviewsPerPage",
                            "image_url": {}
                        },
                        {
                            "username": "reviewsPerPage",
                            "rating": 3,
                            "comment": "reviewsPerPage",
                            "published_date": "2024-01-23",
                            "like_count": 0,
                            "dislike_count": 0,
                            "includes_image": true,
                            "review_title": "reviewsPerPage",
                            "image_url": {}
                        },
                        {
                            "username": "reviewsPerPage",
                            "rating": 3,
                            "comment": "reviewsPerPage",
                            "published_date": "2024-01-23",
                            "like_count": 0,
                            "dislike_count": 0,
                            "includes_image": true,
                            "review_title": "reviewsPerPage",
                            "image_url": {}
                        },
                        {
                            "username": "reviewsPerPage",
                            "rating": 3,
                            "comment": "reviewsPerPage",
                            "published_date": "2024-01-23",
                            "like_count": 0,
                            "dislike_count": 0,
                            "includes_image": false,
                            "review_title": "reviewsPerPage",
                            "image_url": {}
                        },
                        {
                            "username": "reviewsPerPage",
                            "rating": 3,
                            "comment": "reviewsPerPage",
                            "published_date": "2024-01-23",
                            "like_count": 0,
                            "dislike_count": 0,
                            "includes_image": true,
                            "review_title": "reviewsPerPage",
                            "image_url": {}
                        },
                        {
                            "username": "dsaads",
                            "rating": 2,
                            "comment": "tesad2@gmail.com",
                            "published_date": "2024-01-23",
                            "like_count": 0,
                            "dislike_count": 0,
                            "includes_image": true,
                            "review_title": "tesad2@gmail.com",
                            "image_url": {}
                        },
                        {
                            "username": "dsaads",
                            "rating": 2,
                            "comment": "tesad2@gmail.com",
                            "published_date": "2024-01-23",
                            "like_count": 0,
                            "dislike_count": 0,
                            "includes_image": true,
                            "review_title": "tesad2@gmail.com",
                            "image_url": {}
                        },
                        {
                            "username": "dsaads",
                            "rating": 2,
                            "comment": "tesad2@gmail.com",
                            "published_date": "2024-01-23",
                            "like_count": 0,
                            "dislike_count": 0,
                            "includes_image": true,
                            "review_title": "tesad2@gmail.com",
                            "image_url": {}
                        },
                        {
                            "username": "test",
                            "rating": 4,
                            "comment": "tesad@dsasd.com",
                            "published_date": "2024-01-23",
                            "like_count": 0,
                            "dislike_count": 0,
                            "includes_image": true,
                            "review_title": "tesad@dsasd.com",
                            "image_url": {}
                        },
                        {
                            "username": "test",
                            "rating": 1,
                            "comment": "tesad@dsasd.com",
                            "published_date": "2024-01-23",
                            "like_count": 0,
                            "dislike_count": 0,
                            "includes_image": false,
                            "review_title": "tesad@dsasd.com",
                            "image_url": {}
                        },
                        {
                            "username": "test",
                            "rating": 1,
                            "comment": "tesad@dsasd.com",
                            "published_date": "2024-01-23",
                            "like_count": 0,
                            "dislike_count": 0,
                            "includes_image": false,
                            "review_title": "tesad@dsasd.com",
                            "image_url": {}
                        },
                    ],
                    "review_count": 48,
                    "average_rating": "3.3",
                    "fiveStarReviewCount": 21,
                    "fourStarReviewCount": 1,
                    "threeStarReviewCount": 11,
                    "twoStarReviewCount": 0,
                    "oneStarReviewCount": 15,
                    "total_review_pages": 48,
                    "current_review_page": "2"
                }
            }
        }


    ]


    const storedValue = localStorage.getItem(key);

    if (!storedValue) {
        localStorage.setItem(key, JSON.stringify(initialValue));
    }


};

export default useLocalStorageToRenderInitialData;
