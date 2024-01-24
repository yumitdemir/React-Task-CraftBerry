import React, {useContext, useState} from 'react';
import {IoClose} from "react-icons/io5";
import StarRatingInput from "../common/StarRatingInput.jsx";
import { useForm } from "react-hook-form";
import {ProductDataContext} from "../../context/ProductContext.jsx";
import {useNavigate} from "react-router-dom";

function AddReviewButton(props) {
    const [showModal, setShowModal] = useState(false);
    const {reset, control, register, handleSubmit,formState: { errors } } = useForm();
    const {productData, setProductData} = useContext(ProductDataContext);
    const navigate = useNavigate();
    const urlParams = new URLSearchParams(window.location.search);

    if (showModal) {
        document.body.classList.add("overflow-y-hidden")
    } else {
        document.body.classList.remove("overflow-y-hidden")
    }
    const handleButtonClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const onSubmit = (data) => {
        // Create a new review object
        const newReview = {
            "username": data.name,
            "rating": data.rating,
            "comment": data.content,
            "published_date": new Date().toISOString().split('T')[0], // current date in YYYY-MM-DD format
            "like_count": 0,
            "dislike_count": 0,
            "includes_image": data.photo instanceof File && data.photo.size > 0,
            "review_title": data.title,
            "image_url": data.photo || ""
        };

        const productsDataLocalStorage = JSON.parse(localStorage.getItem('productData'));

        const productIndex = productsDataLocalStorage.findIndex(product => product.data.product.handle === productData.handle);

        if (productIndex !== -1) {
            productsDataLocalStorage[productIndex].data.product.reviews.push(newReview);

            localStorage.setItem('productData', JSON.stringify(productsDataLocalStorage));
            urlParams.set('reviewPage', '1')
            navigate(`?${urlParams.toString()}`)
            setShowModal(false);
            reset();
        }
    };

    return (
        <div>
            <button className={"px-[25px] py-[13px] bg-primary text-typography-white text-[15px] leading-[17px]"}
                    onClick={handleButtonClick}>Leave a review
            </button>
            {showModal && (
                <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog"
                     aria-modal="true">
                    <div
                        className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 bg-typography-dark bg-opacity-75 transition-opacity"
                             aria-hidden="true"></div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"
                              aria-hidden="true">&#8203;</span>
                        <div
                            className="inline-block max-w-[509px]  p-[40px]  align-bottom bg-white  text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="flex items-start">
                                    <div className="mt-3 sm:mt-0 sm:ml-4 sm:text-left flex-grow">
                                        <h3 className="text-[26px] leading-[31px] font-medium text-gray-900 "
                                            id="modal-title">
                                            Leave a review
                                        </h3>
                                        <form onSubmit={handleSubmit(onSubmit)}
                                              className={"flex flex-col gap-[20px] w-full mt-[26px]  "}>
                                            <div className="flex flex-col gap-[10px] w-full">
                                                <label htmlFor="name"
                                                       className="block text-[14px] leading-[14px] tracking-[-0.28px] font-medium text-typography-dark">Your
                                                    Name</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    {...register("name", { required: "Review content is required" })}
                                                    className="w-full px-[12px] py-[12px] rounded-[10px] border-light-gray  text-[14px] font-medium bg-white   border   "
                                                    placeholder="Your name"
                                                />
                                                {errors.name && <p>{errors.name.message}</p>}

                                            </div>
                                            <div className="flex flex-col gap-[10px]">
                                                <label htmlFor="email"
                                                       className="block text-[14px] leading-[14px] tracking-[-0.28px] font-medium text-typography-dark">E-mail</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    {...register("email", { required: "Review content is required" })}
                                                    className="w-full px-[12px] py-[12px] rounded-[10px] border-light-gray  text-[14px] font-medium bg-white   border   "
                                                    placeholder="Enter your e-mail"
                                                />
                                                {errors.email && <p>{errors.email.message}</p>}

                                            </div>
                                            <div className="flex flex-col gap-[10px]">
                                                <label htmlFor="rating"
                                                       className="block text-[14px] leading-[14px] tracking-[-0.28px] font-medium text-typography-dark">Rating</label>
                                                <StarRatingInput control={control} name="rating" rules={{ required: "Rating is required" }} error={errors.rating} />                                            </div>
                                            <div className="flex flex-col gap-[10px]">
                                                <label htmlFor="title"
                                                       className="block text-[14px] leading-[14px] tracking-[-0.28px] font-medium text-typography-dark">Review
                                                    Title</label>
                                                <input
                                                    type="text"
                                                    id="title"
                                                    {...register("title", { required: "Review content is required" })}
                                                    className="w-full px-[12px] py-[12px] rounded-[10px] border-light-gray  text-[14px] font-medium bg-white   border   "
                                                    placeholder="Enter your review title"
                                                />
                                                {errors.title && <p>{errors.title.message}</p>}
                                            </div>
                                            <div className="flex flex-col gap-[10px]">
                                                <label htmlFor="content"
                                                       className="block text-[14px] leading-[14px] tracking-[-0.28px] font-medium text-typography-dark">Review</label>
                                                <textarea
                                                    id="content"
                                                    {...register("content", { required: "Review content is required" })}
                                                    className="w-full px-[12px] py-[12px] rounded-[10px] border-light-gray  text-[14px] font-medium bg-white   border   "
                                                    placeholder="Write your review"
                                                />
                                                {errors.content && <p>{errors.content.message}</p>}

                                            </div>
                                            <div className="flex flex-col gap-[10px]">
                                                <label htmlFor="photo"
                                                       className="block text-[14px] leading-[14px] tracking-[-0.28px] font-medium text-typography-dark">Upload
                                                    a photo of how it looks (optional)</label>
                                                <input
                                                    type="file"
                                                    id="photo"
                                                    {...register("photo")}
                                                    className="w-full px-[12px] py-[12px] rounded-[10px] border-light-gray  text-[14px] font-medium bg-white   border   "
                                                />

                                            </div>
                                          <div className={"w-full  text-center"}>
                                              <button type="submit"
                                                      className=" px-[34px]  py-[14px] text-[15px] text-typography-white rounded bg-primary">Submit
                                                  Review
                                              </button>
                                          </div>
                                        </form>
                                    </div>
                                    <div className="ml-auto cursor-pointer">
                                        <IoClose size={30} onClick={handleCloseModal}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AddReviewButton;