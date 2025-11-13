
import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import HomePage from "../Pages/HomePages/HomePage";
import AuthLayout from "../Layout/AuthLayout";
import Login from '../src/Component/Login/Login'
import Regiestration from '../src/Component/Regiestration/Regiestration'
import AddFood from '../src/Component/AddFood/AddFood'
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import ManageMyFood from '../src/Component/ManageMyFood/ManageMyFood'
import MyFoodReq from '../src/MyFoodRequest/MyFoodReq'
import AllFoodShow from "../src/Component/AllFoodShow/AllFoodShow";
import ErrorPage from "../src/Error/Error";
import FoodDetails from '../src/Component/FoodDetails/FoodDetails'


 const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children : [
        {
            index : true,
            loader: ()=> fetch(`https://b12-a10-future-box-server-eight.vercel.app/allfood/sort`),
            Component : HomePage
        }
    ]
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children : [
        {
            path : "login",
            element : <Login></Login>
        },
        {
            path : "regiestration",
            Component : Regiestration
        }
    ]
  },
  {
    path: "/addfood",
    element:  <PrivateRoutes><AddFood></AddFood></PrivateRoutes> ,
  },
  {
    path: "/managemyfood",
    element:  <PrivateRoutes><ManageMyFood></ManageMyFood></PrivateRoutes> ,
  },
  {
    path: "/myfoodrequest",
    element:  <PrivateRoutes><MyFoodReq></MyFoodReq></PrivateRoutes> ,
  },
  {
    path: "/allfood",
    loader: ()=> fetch('https://b12-a10-future-box-server-eight.vercel.app/food'),
    element: <AllFoodShow></AllFoodShow> ,
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
    element: <ErrorPage></ErrorPage> ,
  },
 
]);

 export default router