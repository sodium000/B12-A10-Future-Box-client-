import React from 'react';
import FoodCard from '../../src/FootCard/FoodCard'
import HowWork from '../../src/Component/HowWork/HowWork';
import OurMission from '../../src/Component/OurMission/OurMission';

const HomePage = () => {
    return (
        <div>
            <FoodCard></FoodCard>
            <HowWork></HowWork>
            <OurMission></OurMission>
        </div>
    );
};

export default HomePage;