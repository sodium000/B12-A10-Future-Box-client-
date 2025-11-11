import React from 'react';
import { useLoaderData } from 'react-router';
import FoodCard from '../../FootCard/FoodCard';
import Navbars from '../../NavBar/Navbars';

const AllFoodShow = () => {
    const AllFood = useLoaderData();
    return (
        <div className='bg-linear-to-br from-cyan-600 via-white to-purple-500'>
            <Navbars></Navbars>
             <div className="min-h-screen container mx-auto  py-16 px-6 bg-[url(/AnimatedShape.svg)] bg-cover bg-center bg-no-repeat">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-slate-300 mb-2">
          🍽️ Available Food Donations
        </h1>
        <p className="text-slate-300 text-lg">
          Fresh, free, and shared with kindness 💚
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
            {
            AllFood.map((data)=><FoodCard key={data._id} data={data}></FoodCard>)
        }
      </div>
    </div>
        </div>
    );
};

export default AllFoodShow;