import React from 'react';
import FoodCard from '../../src/FootCard/FoodCard'
import HowWork from '../../src/Component/HowWork/HowWork';
import OurMission from '../../src/Component/OurMission/OurMission';
import { useLoaderData } from 'react-router';

const HomePage = () => {
    console.log("Tom")
    const AllFood = useLoaderData();
    return (
    <div className=''>
        <div className='bg-[url(/abstract-textured-backgound.jpg)] pt-10 bg-cover bg-center bg-no-repeat '>
            <div className='container mx-auto py-4 sm:py-6 md:py-8'>
                <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center px-2 sm:px-4">
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