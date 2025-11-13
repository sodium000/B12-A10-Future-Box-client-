import React from 'react';
import FoodCard from '../../src/FootCard/FoodCard'
import HowWork from '../../src/Component/HowWork/HowWork';
import OurMission from '../../src/Component/OurMission/OurMission';
import { Link, useLoaderData } from 'react-router';
import Footer from '../../src/Footer/Footer';

const HomePage = () => {
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
              <Link to='/allfood'>
                            <button
                                className="px-4 mb-10 sm:px-6 md:px-8 py-2 sm:py-3 border-2 border-yellow-400 text-yellow-400 sm:text-yellow-600 font-semibold 
                            rounded-md hover:bg-yellow-50 transition duration-300 text-sm sm:text-base
                            transform hover:scale-105 active:scale-95"
                            >
                                Show All Food 
                            </button>
                        </Link>
        </div>
            <HowWork></HowWork>
            <OurMission></OurMission>
            <Footer></Footer>
            
    </div>
    );
};

export default HomePage;