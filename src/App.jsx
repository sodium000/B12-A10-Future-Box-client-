import React from "react";
import Navbars from "./NavBar/Navbars";
import Banner from "./BannerSection/Banner";
import FoodCard from './FootCard/FoodCard'


export default function App() {
  return (
    <>
     <div className=" flex  justify-center bg-base-100">
      <Navbars></Navbars>
    </div>
    <Banner></Banner>
    <FoodCard></FoodCard>
    </>
   
  );
}
