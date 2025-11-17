import React from 'react';
// Assuming you have a component library for icons like react-icons
import { FiPackage, FiMapPin, FiCalendar, FiUser, FiMail, FiCamera, FiTag } from 'react-icons/fi';
import Navbars from '../../NavBar/Navbars';
import { use } from 'react';
import AuthContext from '../../AuthContext/AuthContext';
import Footer from '../../Footer/Footer';

const FoodDonationForm = () => {
    const {user} = use(AuthContext)


    const foodAdd = (event)=>{
        event.preventDefault()
        const newFood = {
            Donor_name : user.displayName,
            Email:user.email,
            Donor_img : user.photoURL,
            Status : "Available",
            Food_name : event.target.foodName.value,
            Food_serve : event.target.foodQuantity.value,
            Location : event.target.pickupLocation.value,
            Date : event.target.expireDate.value,
            Description : event.target.additionalNote.value,
            FoodImag : event.target.Photo_URL.value
        }
        fetch('http://localhost:3000/allfood',{
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(newFood)
        })
          .then(res => res.json())
            .then(data => {
                console.log("after data post", data);
                    alert("New user created")
                    event.target.reset()
                
            })
    }

    const InputField = ({ label, type = 'text', name, icon: Icon, placeholder, required = false, className = '', readOnly= false ,User}) => (
        <div className={`mb-4 ${className}`}>
            <label htmlFor={name} className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <div className="relative rounded-md shadow-sm">
                {Icon && (
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" aria-hidden="true" />
                    </div>
                )}
                <input
                    type={type}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    required={required}
                    readOnly ={readOnly}
                    value={User}
                    className={`block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 text-sm sm:text-base p-2 sm:p-3 ${Icon ? 'pl-9 sm:pl-10' : ''}`}
                />
            </div>
        </div>
    );

    return (
        <>
        <div className='bg-[url(/coolbackgrounds-fractalize-cool_backgrounds.png)] bg-cover bg-center bg-no-repeat min-h-screen'>
        <Navbars></Navbars>
        <div className=''>
            <form onSubmit={foodAdd} className='max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 not-first:shadow-xl rounded-xl'>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-green-700 mb-4 sm:mb-6 border-b pb-2 sm:pb-3">
                    Food Added
                </h1>
                <section className="mb-6 sm:mb-8 p-4 sm:p-6 border border-gray-200 rounded-lg bg-gray-50/90 backdrop-blur-sm">
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4 flex items-center">
                        <FiPackage className="h-5 w-5 sm:h-6 sm:w-6 mr-2 text-green-600" />
                        Food Item & Pickup Details
                    </h2>

                    <div className="grid grid-cols-1 gap-4 sm:gap-x-6 sm:grid-cols-2">
                        <InputField
                            label="Food Name"
                            name="foodName"
                            placeholder="e.g., Freshly Baked Bread Rolls"
                            icon={FiPackage}
                            required
                            />

                        <InputField
                            label="Food Quantity (Estimate)"
                            name="foodQuantity"
                            type="number"
                            placeholder="e.g., 20 servings or 5 lbs"
                            icon={FiTag}
                            />
                    </div>

                    <InputField
                        label="Full Pickup Location Address"
                        name="pickupLocation"
                        placeholder="Street, City, Postal Code"
                        icon={FiMapPin}
                        required
                        />

                    <div className="grid grid-cols-1 gap-4 sm:gap-x-6 sm:grid-cols-2">
                        <InputField
                            label="Expired Date"
                            name="expireDate"
                            type="date"
                            icon={FiCalendar}
                            required
                            />

                        <InputField
                            label="Food Photo"
                            name="Photo_URL"
                            placeholder="Photo_URL"
                            required
                            />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="additionalNote" className="block text-sm font-medium text-gray-700 mb-1">
                            Additional Notes (e.g., Storage, Allergy Info)
                        </label>
                        <textarea
                            id="additionalNote"
                            name="additionalNote"
                            rows="3"
                            className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-3 resize-y"
                            placeholder="e.g., Keep refrigerated. Pickup is available after 5 PM."
                            ></textarea>
                    </div>

                </section>
                <section className="p-4 sm:p-6 border border-gray-200 rounded-lg bg-white/90 backdrop-blur-sm">
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4 flex items-center">
                        <FiUser className="h-5 w-5 sm:h-6 sm:w-6 mr-2 text-blue-600" />
                        Donor & Status Tracking
                    </h2>

                    <div className="grid grid-cols-1 gap-4 sm:gap-x-6 sm:grid-cols-2 md:grid-cols-3">
                        <InputField
                            label="Donor's Name"
                            name="donorName"
                            icon={FiUser}
                            readOnly
                            User = {user.displayName}
                            />
                        <InputField
                            label="Donor's Email"
                            name="donorEmail"
                            type="email"
                            icon={FiMail}
                            readOnly
                            User = {user.email}
                            />
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Current Status (Internal)
                            </label>
                            <p
                                className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-yellow-100 text-yellow-800`}>
                                <FiTag className="h-4 w-4 mr-1" />
                                Available
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:gap-x-6 sm:grid-cols-2 md:grid-cols-3">
                        <div className="mb-4">
                            <label htmlFor="donorImage" className="block text-sm font-medium text-gray-700 mb-1">
                                Donor Image/Logo
                            </label>
                            <div className="mt-1 flex items-center">
                                <img
                                    src={user.photoURL}
                                    alt="Donor"
                                    className="w-9 h-9 rounded-3xl object-cover"
                                    />
                            </div>
                        </div>
                    </div>
                </section>

                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t flex justify-end">
                    <button
                        type="submit"
                        className="inline-flex justify-center rounded-lg border border-transparent bg-green-600 py-2 px-4 sm:py-3 sm:px-6 text-sm sm:text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-150 w-full sm:w-auto"
                        >
                        Confirm
                    </button>
                </div>
            </form>
        </div>
     </div>
     <Footer></Footer>
    </>
    );
};

export default FoodDonationForm;