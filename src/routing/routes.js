import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import CarsListPage from "./CarsListPage";
import AddCarPage from "./AddCarPage";
import Layout from "./Layout";
import HomePage from "./HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "cars",
        element: <CarsListPage />,
      },
      {
        path: "addcar",
        element: <AddCarPage />,
      },
    ],
  },
]);
