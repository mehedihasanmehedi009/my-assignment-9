import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import MyProfile from "../Pages/My Profile";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../MainLayout/AuthLayout";
import NotFound from "../Pages/NotFound";
import Ditels from "../Pages/Ditels";
import Animalcard from "../Pages/Animalcard";
import { Profiler } from "react";
import ProfileCard from "../Pages/My Profile";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/myprofile",
        element: <ProfileCard></ProfileCard>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/registar",
        element: <Register></Register>,
      },
    ],
  },

  {
    path: "/Ditelscard/:serviceId",
    element: <Ditels></Ditels>,
    loader: () => fetch("/Dog.json"),
  },
  {
    path: "/*",
    element: <NotFound></NotFound>,
  },
]);
