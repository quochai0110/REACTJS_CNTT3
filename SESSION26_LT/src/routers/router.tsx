import { createBrowserRouter } from "react-router-dom";
import ProductDetail from "../assets/pages/ProductDetail";


export const routers= createBrowserRouter([
    {
        path: "/product/:id",
        element : <ProductDetail/>
    }
])