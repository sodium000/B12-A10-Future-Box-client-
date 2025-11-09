import React from "react";
import Navbars from "./NavBar/Navbars";
import Banner from "./BannerSection/Banner";
import FoodCard from './FootCard/FoodCard'
import HowWork from "./Component/HowWork/HowWork";
import OurMission from "./Component/OurMission/OurMission";


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
    </>
   
  );
}
