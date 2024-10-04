import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import Home from "./page/home";
import Login from "./page/login";
import SignUp from "./page/signup"
import Dashboard from "./page/admin";
import Cart from "./page/cart";
import Products from "./page/products";
import ProductDetail from "./page/productDetail";
import PrivateRoute from "./component/private-route";
import About from "./page/about";
import Profile from "./page/user/editProfile";
import CreateProduct from "./page/seller"; 
import ForgotPassword from './page/login/forgetPassword';
import AdminLayout from "./page/admin/AdminLayout";
import QuanLiSanPham from "./page/admin/QuanLiSanPham";
import PaymentButton from "./component/button/PaymentButton";
import PaymentResult from "./page/payment";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "signup",
      element: <SignUp />,
    },
    {
      path: "profile",
      element: <Profile />,
    },
    {
      path: "cart",
      element: <Cart />
    },
    {
      path: "about",
      element: <About />
    },
    {
      path: "product/:id",
      element: <ProductDetail />,
    },
    {
      path: "products",
      element: <Products />
    },
    {
      path: "forgot-password",
      element: <ForgotPassword />
    },
    {
      path: "manage-product", 
      element: <PrivateRoute requiredRole="Seller">
        <CreateProduct />
      </PrivateRoute>
    },
    {
      path: "admin",
      element: (
        <PrivateRoute requiredRole="Admin"> 
          <AdminLayout /> 
        </PrivateRoute>
      ),
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "quanlisanpham",
          element: <QuanLiSanPham />, 
        },
      ],
    },
    {
      path: "payment",
      element: <PaymentButton />,
    },
    {
      path: "payment-result", 
      element: <PaymentResult />,
    },
  ]);

  return(
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
};

export default App;