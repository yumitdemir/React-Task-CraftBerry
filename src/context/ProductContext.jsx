import React, { createContext, useState } from 'react';

export const ProductDataContext = createContext();

export const ProductDataProvider = ({ children }) => {
    const [productData, setProductData] = useState(null);

    return (
        <ProductDataContext.Provider value={{ productData, setProductData }}>
            {children}
        </ProductDataContext.Provider>
    );
};