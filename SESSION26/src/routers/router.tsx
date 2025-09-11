import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Admin from "../layouts/Admin";
import UserManager from "../pages/UserManager";
import ProductManager from "../pages/ProductManager";
import ProductDetail from "../pages/ProductDetail";
import OrderManager from "../pages/OrderManager";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "../components/ProtectedRoute";



export const routers = createBrowserRouter([
     {
      path:"/",
      element: <Home></Home>
    },
    {
      path:"/about",
      element: <About></About>
    },
    {
      path:"/contact",
      element:<Contact></Contact>
    },
    {
      path:"/admin",
      element:<ProtectedRoute element={<Admin></Admin>}></ProtectedRoute>,
      children:[
        {
          path:"user",
          element:<UserManager></UserManager>
        },
          {
          path:"product",
          element:<ProductManager></ProductManager>
        },
        {
          path:"product/:id",
          element:<ProductDetail></ProductDetail>
        },
          {
          path:"order",
          element:<OrderManager></OrderManager>
        }
      ]
    },
    {
      path:"/login",
      element:<Login></Login>
    },
    {
      path:"*",
      element:<NotFound></NotFound>
    }
  ])