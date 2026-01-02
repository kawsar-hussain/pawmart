import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./myStyle.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Root";
import Home from "./Components/Home/Home";
import AuthenticationLayout from "./Components/Authentication/AuthenticationLayout";
import Login from "./Components/Authentication/Login/Login";
import Register from "./Components/Authentication/Register/Register";
import AuthProvider from "./Provider/AuthProvider";
import RedirectIfAuthenticated from "./Components/Authentication/RedirectIfAuthenticated";
import Error404 from "./Error/Error404";
import AddProductForm from "./Components/ProductListing/AddProductForm";
import PrivateRoute from "./Provider/PrivateRoute";
import Products from "./Components/Products/Products";
import ProductDetails from "./Components/Products/ProductDetails";
import FilteredCategory from "./Components/Home/ProductCategory/FilteredCategory";
import MyProducts from "./Components/Products/MyProducts/MyProducts";
import UpdateMyProduct from "./Components/Products/MyProducts/UpdateMyProduct";
import Orders from "./Components/OrderList/Orders";
import Pets from "./Components/Pets/Pets";

// promise for plants section

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "filtered-category/:category",
        element: <FilteredCategory></FilteredCategory>,
      },
      {
        path: "add-product-form",
        element: (
          <PrivateRoute>
            <AddProductForm></AddProductForm>
          </PrivateRoute>
        ),
      },
      {
        path: "pets",
        element: <Pets></Pets>,
      },
      {
        path: "products",
        element: <Products></Products>,
      },
      {
        path: "product-details/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "my-products",
        element: (
          <PrivateRoute>
            <MyProducts></MyProducts>
          </PrivateRoute>
        ),
      },
      {
        path: "update-product/:id",
        element: (
          <PrivateRoute>
            <UpdateMyProduct></UpdateMyProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "my-orders",
        element: (
          <PrivateRoute>
            <Orders></Orders>
          </PrivateRoute>
        ),
      },

      {
        path: "auth",
        Component: AuthenticationLayout,
        children: [
          {
            path: "login",
            element: (
              <RedirectIfAuthenticated>
                <Login></Login>
              </RedirectIfAuthenticated>
            ),
          },
          {
            path: "register",
            element: (
              <RedirectIfAuthenticated>
                <Register></Register>
              </RedirectIfAuthenticated>
            ),
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Error404></Error404>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
