import React from 'react';
import FoodCard from '../../src/FootCard/FoodCard'
import HowWork from '../../src/Component/HowWork/HowWork';
import OurMission from '../../src/Component/OurMission/OurMission';
import Features from '../../src/Component/Features/Features';
import Services from '../../src/Component/Services/Services';
import Highlights from '../../src/Component/Highlights/Highlights';
import Statistics from '../../src/Component/Statistics/Statistics';
import Testimonials from '../../src/Component/Testimonials/Testimonials';
import Blogs from '../../src/Component/Blogs/Blogs';
import Newsletter from '../../src/Component/Newsletter/Newsletter';
import FAQ from '../../src/Component/FAQ/FAQ';
import CTA from '../../src/Component/CTA/CTA';
import { Link, useLoaderData } from 'react-router';
import Footer from '../../src/Footer/Footer';

const HomePage = () => {
    const AllFood = useLoaderData();
    return (
        <div className=''>
            <div className='pt-10 '>
                <div className='container mx-auto py-4 sm:py-6 md:py-8'>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold pb-2 text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-orange-500">
                        Choose & enjoy
                    </h2>
                    <p className='mb-10 font-bold'>Inspired by recipes and creations of world’s best chefs</p>
                    <div className="grid gap-3 sm:gap-4 md:grid-cols-3 sm:grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 justify-items-center px-2 sm:px-4">
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
            <Features />
            <Services />
            <Statistics />
            <Highlights />
            <HowWork />
            <CTA/>
            <Testimonials />
            <Blogs />
            <OurMission />
            <FAQ />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default HomePage;