import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import HomePage from "../layouts/HomePage";
import ProductList from "../pages/ProductList";
import ProductDetail from "../pages/ProductDetail";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
    ],
  },
  {
    path:"/products",
    element:<ProductList></ProductList>
  },
  {
    path:"/products/:id",
    element:<ProductDetail></ProductDetail>
  }
]);
