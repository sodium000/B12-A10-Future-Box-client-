import React from 'react';
import FoodCard from '../../src/FootCard/FoodCard'
import HowWork from '../../src/Component/HowWork/HowWork';
import OurMission from '../../src/Component/OurMission/OurMission';
import { useLoaderData } from 'react-router';

const HomePage = () => {
    const AllFood = useLoaderData();


    return (
    <div>
        <div className='bg-[url(/abstract-textured-backgound.jpg)] bg-cover bg-center bg-no-repeat'>
            <div className='container mx-auto py-6'>
                <div className="  grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
                    {
                        AllFood.map((data) => <FoodCard key={data._id} data={data}></FoodCard>)
                    }
                </div>
            </div>
        </div>
            <HowWork></HowWork>
            <OurMission></OurMission>
    </div>
    );
};

export default HomePage;