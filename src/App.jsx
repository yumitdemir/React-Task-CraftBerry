import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes} from "react-router-dom";
import ProductPage, {productLoader} from "./pages/Product/ProductPage.jsx";
import useLocalStorageToRenderInitialData from "./hooks/useLocalStorageToRenderInitialData.jsx";
import {ProductDataProvider} from "./context/ProductContext.jsx";

function App() {

    useLocalStorageToRenderInitialData()

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path={"/product"}>
                <Route path=":productHandle" element={<ProductPage/>} loader={productLoader}/>
            </Route>
        )
    )

    return (
        <ProductDataProvider>
            <RouterProvider router={router}/>
        </ProductDataProvider>
    )
}

export default App