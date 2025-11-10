import React from 'react';
import Button from '../Button/LoginButton';
import ThemeToggle from '../ThemToggle/ThemToggle';
import { use } from 'react';
import AuthContext from '../AuthContext/AuthContext';
import { Link } from 'react-router';

const Navbars = () => {
    const { user, loading,SignOut } = use(AuthContext)
    const link = <>
        {
            user ? <>
                <Link to='/addfood' >Add Food</Link>
                <Link to='/managemyfood' >Manage My Food</Link>
                <Link to='/myfoodrequest' >My Food Requests</Link>
                <Link onClick={()=>SignOut()}>Logout</Link>
            </> : ""
        }
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm px-30">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link >Available Foodes</Link></li>
                        {
                            link
                        }
                    </ul>
                </div>
                <div className='flex  items-center'>
                    <a className="text-xl">Plates<span className='text-blue-600'>Share</span></a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to={'/'} >Home</Link></li>
                    <li><Link>Available Foodes</Link></li>
                </ul>
            </div>
            <div className=" navbar-end  gap-5">
                <ThemeToggle></ThemeToggle>
                {loading ? (
                    <span className="loading loading-spinner loading-md"></span>
                ) : (
                    <>
                        <Button></Button>
                        {
                            user ? <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="Tailwind CSS Navbar component"
                                            src={user.photoURL}
                                        />
                                    </div>
                                </div>
                                <ul
                                    tabIndex="-1"
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                    {
                                        link
                                    }
                                </ul>
                            </div> : ""
                        }
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbars;