import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Homepage from "../Pages/Homepage";
import Kyc from "../Pages/Kyc";
import Sendout from "../Pages/Sendout";
import Payout from "../Pages/Payout";

const AppRouters = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: <Homepage />,
        },
        {
          path: "Homepage",
          element: <Homepage />,
        },
        {
          path: "KYC",
          element: <Kyc />,
        },
        {
          path: "Sendout",
          element: <Sendout />,
        },
        {
          path: "Payout",
          element: <Payout />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRouters;
