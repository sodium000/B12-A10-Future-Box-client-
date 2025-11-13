import React from 'react';
import { useLoaderData } from 'react-router';
import FoodCard from '../../FootCard/FoodCard';
import Navbars from '../../NavBar/Navbars';
import Footer from '../../Footer/Footer';

const AllFoodShow = () => {
    const AllFood = useLoaderData();
    return (
        <div className='bg-linear-to-br from-cyan-600 via-white to-purple-500 '>
            <Navbars></Navbars>
             <div className="min-h-screen container mx-auto py-8 sm:py-12 md:py-16 px-4 sm:px-6 bg-[url(/AnimatedShape.svg)] bg-cover bg-center bg-no-repeat">
      <div className="text-center mb-8 sm:mb-10 md:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-300 mb-2">
          🍽️ Available Food Donations
        </h1>
        <p className="text-slate-300 text-sm sm:text-base md:text-lg">
          Fresh, free, and shared with kindness 💚
        </p>
      </div>
      <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
            {
            AllFood.map((data)=><FoodCard key={data._id} data={data}></FoodCard>)
        }
      </div>
    </div>
    <Footer></Footer>
        </div>
    );
};

export default AllFoodShow;