import React, {useContext, useEffect, useState} from 'react';
import StarReview from "../../../components/review/StarReview.jsx";
import {ProductDataContext} from "../../../context/ProductContext.jsx";

function ProductDetail(props) {
    const {productData} = useContext(ProductDataContext);
    const [selectedImage, setSelectedImage] = useState(productData?.image_link[0]);

    useEffect(() => {
        if (productData?.image_link[0] && selectedImage !== productData?.image_link[0]) {
            setSelectedImage(productData?.image_link[0]);
        }
    }, [productData]);

    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
    }

    return (
        <div className={"flex flex-col-reverse md:flex-row justify-around gap-12 md:gap-8 mb-12"}>
            <div className={"flex flex-col flex-1"}>
                <img src={selectedImage} alt="" className={"w-[743px] h-[680px] flex-1  "}/>
                <div className={"flex flex-wrap"}>
                    {productData?.image_link.map((imageUrl, index) => {
                        if (imageUrl !== selectedImage) {
                            return (
                                <img key={index} src={imageUrl} alt="" className={"w-[100px] h-[100px] m-2 cursor-pointer"} onClick={() => handleImageClick(imageUrl)}/>
                            )
                        }
                    })}
                </div>
            </div>

            <div className={"flex flex-col flex-1  items-center md:items-start"}>
                <div className={"w-100  flex flex-col   "}>
                    <h1 className={"text-black text-[34px] font-normal leading-[37.40px]"}>{productData?.title}</h1>
                    <span
                        className={"text-[28px] text-typography-dark leading-[40px]"}>{productData?.currency_symbol}{productData?.price}</span>
                </div>

                <div className={"flex flex-col mt-[32px] gap-[10px] justify-start"}>
                    <div className={"flex gap-1"}>
                        <StarReview rating={productData?.average_rating}/>
                        <span className={"text-typography-dark"}>{productData?.average_rating}</span>
                        <span className={"text-typography-dark"}>({productData?.review_count} reviews)</span>
                    </div>

                    <span className={"text-primary font-bold lead-[22px]"}>BUTTER UP!</span>
                    <p className={"text-typography-dark"}>{productData?.description}</p>

                </div>

            </div>

        </div>
    );
}

export default ProductDetail;