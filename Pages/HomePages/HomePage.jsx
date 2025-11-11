import React from 'react';
import FoodCard from '../../src/FootCard/FoodCard'
import HowWork from '../../src/Component/HowWork/HowWork';
import OurMission from '../../src/Component/OurMission/OurMission';
import { useLoaderData } from 'react-router';

const HomePage = () => {
        const AllFood = useLoaderData();
       

    return (
        <div>
             {
            AllFood.map((data)=><FoodCard key={data._id} data={data}></FoodCard>)
        }
            <HowWork></HowWork>
            <OurMission></OurMission>
        </div>
    );
};

export default HomePage;