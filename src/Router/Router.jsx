import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import MyProfile from "../Pages/My Profile";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../MainLayout/AuthLayout";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true,
         element: <Home />,
      
        },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/myprofile",
        element: <MyProfile />,
      },
    ],
    
  },
  {
    path:"/auth",
    element:<AuthLayout></AuthLayout>,
    children:[
        {
    path:"/auth/login",
    element:<Login></Login>
  },
  {
    path:"/auth/registar",
    element:<Register></Register>

  },
    ]
     
  },
  {
    path: "/*",
    element: <h1>mehedi</h1>,
  },
]);
