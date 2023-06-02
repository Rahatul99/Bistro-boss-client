import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Orders/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
// import PrivateRoute from "./PrivateRoute";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: 'menu',
            element: <Menu />
        },
        // {
        //     path: 'order/:category',
        //     element: <PrivateRoute><Order /></PrivateRoute>
        // },
        {
            path: 'order/:category',
            element: <Order />
        },
        {
            path: 'login',
            element: <Login />
        },
        {
            path: 'signup',
            element: <SignUp />
        }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard /></PrivateRoute>,
      children: [
        {
          path: 'mycart',
          element: <MyCart />
        },
        {
          path: 'allUsers',
          element: <AllUsers />
        },
        {
          path: 'addItem',
          element: <AdminRoute><AddItem /></AdminRoute>
        },
        {
          path: 'manageItems',
          element: <AdminRoute><ManageItems/></AdminRoute>
        }
      ]
    }
  ]);