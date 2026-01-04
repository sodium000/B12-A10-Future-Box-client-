
import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import HomePage from "../Pages/HomePages/HomePage";
import AuthLayout from "../Layout/AuthLayout";
import DashboardLayout from "../Layout/DashboardLayout";
import Login from '../src/Component/Login/Login'
import Regiestration from '../src/Component/Regiestration/Regiestration'
import AddFood from '../src/Component/AddFood/AddFood'
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import AllFoodShow from "../src/Component/AllFoodShow/AllFoodShow";
import ErrorPage from "../src/Error/Error";
import FoodDetails from '../src/Component/FoodDetails/FoodDetails'
import Profile from '../src/Component/Profile/Profile'
import AboutPage from "../Pages/About/AboutPage";
import CareerPage from "../Pages/Career/CareerPage";
import LocationsPage from "../Pages/office/LocationsPage";


const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        loader: () => fetch(`https://b12-a10-future-box-server-eight.vercel.app/allfood/sort`),
        Component: HomePage
      },
    ]
  },

  {
    path: "about",
    Component: AboutPage
  },
  {
    path: "career",
    Component: CareerPage
  },
  {
    path: "location",
    Component: LocationsPage
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "regiestration",
        Component: Regiestration
      }
    ]
  },
  {
    path: "/addfood",
    element: <PrivateRoutes><AddFood></AddFood></PrivateRoutes>,
  },
  {
    path: "/dashboard",
    element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
  },
  {
    path: "/managemyfood",
    element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
  },
  {
    path: "/myfoodrequest",
    element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
  },
  {
    path: "/approvals",
    element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
  },
  {
    path: "/profile",
    element: <PrivateRoutes><Profile></Profile></PrivateRoutes>,
  },
  {
    path: "/allfood",
    loader: () => fetch('https://b12-a10-future-box-server-eight.vercel.app/food'),
    element: <AllFoodShow></AllFoodShow>,
  },
  {
    path: "/food/:id",
    loader: ({ params }) =>
      fetch(`https://b12-a10-future-box-server-eight.vercel.app/food/${params.id}`),
    element: (
      <PrivateRoutes>
        <FoodDetails></FoodDetails>
      </PrivateRoutes>
    ),
  },
  {
    path: '/*',
    element: <ErrorPage></ErrorPage>,
  },

]);

export default router