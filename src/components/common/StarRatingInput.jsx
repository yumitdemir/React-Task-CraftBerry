import React from 'react';
import {FaStar} from "react-icons/fa";
import { Controller } from "react-hook-form";

function StarRatingInput({ control, name, rules, error }) {
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field }) => (
                <div className={"flex "}>
                    {[...Array(5)].map((star, i) => {
                        const ratingValue = i + 1;

                        return (
                            <label key={i}>
                                <input
                                    type="radio"
                                    value={ratingValue}
                                    checked={ratingValue === field.value}
                                    onChange={() => field.onChange(ratingValue)}
                                    className="hidden"
                                />
                                <FaStar
                                    className="cursor-pointer"
                                    color={ratingValue <= field.value ? "#ffc107" : "#e4e5e9"}
                                    size={20}
                                />
                            </label>
                        );
                    })}
                    {error && <p>{error.message}</p>}
                </div>
            )}
        />
    );
}

export default StarRatingInput;