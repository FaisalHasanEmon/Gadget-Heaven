import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard";
import Statistics from "../pages/Statistics";
import Home from "../pages/Home";
import GadgetCategories from "../components/GadgetCategories";
import Details from "../pages/Details";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/",
            element: <GadgetCategories></GadgetCategories>,
            loader: () => fetch("../products.json"),
          },
          {
            path: "/home/:productID",
            element: <GadgetCategories></GadgetCategories>,
            loader: () => fetch("../products.json"),
          },
        ],
      },
      {
        path: "/details",
        element: <Details></Details>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
    ],
  },
]);

export default routes;
