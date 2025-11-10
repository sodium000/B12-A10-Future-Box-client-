import React from "react";
import Navbars from "./NavBar/Navbars";
import Banner from "./BannerSection/Banner";
import FoodCard from './FootCard/FoodCard'
import HowWork from "./Component/HowWork/HowWork";
import OurMission from "./Component/OurMission/OurMission";
import Regiestration from "./Component/Regiestration/Regiestration";
import Login from "./Component/Login/Login";
import AddFood from './Component/AddFood/AddFood'
import FoodRequest from "./Component/FoodRequest/FoodRequest";
import FoodDetails from "./Component/FoodDetails/FoodDetails";


export default function App() {
  return (
    <>
     <div className=" flex  justify-center bg-base-100">
      <Navbars></Navbars>
    </div>
    <Banner></Banner>
    <FoodCard></FoodCard>
    <HowWork></HowWork>
    <OurMission></OurMission>
    <Regiestration></Regiestration>
    <Login></Login>
    <AddFood></AddFood>
    <FoodRequest></FoodRequest>
    <FoodDetails></FoodDetails>
    </>
   
  );
}
