
import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import HomePage from "../Pages/HomePages/HomePage";
import AuthLayout from "../Layout/AuthLayout";
import Login from '../src/Component/Login/Login'
import Regiestration from '../src/Component/Regiestration/Regiestration'
import AddFood from '../src/Component/AddFood/AddFood'
import FoodLayout from "../Layout/FoodLayout";
import FoodRequest from '../src/Component/FoodRequest/FoodRequest'

 const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children : [
        {
            index : true,
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
    Component: AddFood,
  },
  {
    path: "/managemyfood",
    Component: AddFood,
  },
  {
    path: "/myfoodrequest",
    Component: AddFood,
  },
]);

 export default router