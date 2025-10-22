import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import MyProfile from "../Pages/My Profile";
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
        element: <MyProfile />,
      },
    ],
  },
  {
    path: "*",
    element: <Services></Services>,
  },
]);
