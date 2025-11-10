import React from 'react';
// Assuming you have a component library for icons like react-icons
import { FiPackage, FiMapPin, FiCalendar, FiUser, FiMail, FiCamera, FiTag } from 'react-icons/fi';

const FoodDonationForm = () => {

    const InputField = ({ label, type = 'text', name, icon: Icon, placeholder, required = false, className = '' }) => (
        <div className={`mb-4 ${className}`}>
            <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <div className="relative rounded-md shadow-sm">
                {Icon && (
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <Icon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                )}
                <input
                    type={type}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    required={required}
                    className={`block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-3 ${Icon ? 'pl-10' : ''}`}
                />
            </div>
        </div>
    );

    return (
        <div className='bg-[url(/Polygon Luminary.svg)]'>
            <div className="max-w-4xl mx-auto p-6 not-first:shadow-xl rounded-xl">
                <h1 className="text-3xl font-extrabold text-green-700 mb-6 border-b pb-3">
                    Food Added
                </h1>
                <section className="mb-8 p-6 border border-gray-200 rounded-lg bg-gray-50">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                        <FiPackage className="h-6 w-6 mr-2 text-green-600" />
                        Food Item & Pickup Details
                    </h2>

                    <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2">
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

                    <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2">
                        <InputField
                            label="Expired Date"
                            name="expireDate"
                            type="date"
                            icon={FiCalendar}
                            required
                        />

                        <div className="mb-4">
                            <InputField
                                label="Food Photo"
                                name="Photo_URL"
                                placeholder="Photo_URL"
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="additionalNote" className="block text-sm font-medium text-gray-700 mb-1">
                            Additional Notes (e.g., Storage, Allergy Info)
                        </label>
                        <textarea
                            id="additionalNote"
                            name="additionalNote"
                            rows="3"
                            className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-3"
                            placeholder="e.g., Keep refrigerated. Pickup is available after 5 PM."
                        ></textarea>
                    </div>

                </section>
                <section className="p-6 border border-gray-200 rounded-lg bg-white">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                        <FiUser className="h-6 w-6 mr-2 text-blue-600" />
                        Donor & Status Tracking
                    </h2>

                    <div className="grid grid-cols-1 gap-x-6 md:grid-cols-3">
                        <InputField
                            label="Donor's Name"
                            name="donorName"
                            icon={FiUser}
                            required
                        />
                        <InputField
                            label="Donor's Email"
                            name="donorEmail"
                            type="email"
                            icon={FiMail}
                            required
                        />
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Current Status (Internal)
                            </label>
                            <p
                                name=""
                                className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-yellow-100 text-yellow-800`}>
                                <FiTag className="h-4 w-4 mr-1" />
                                Available
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-x-6 md:grid-cols-3">
                        <div className="mb-4">
                            <label htmlFor="donorImage" className="block text-sm font-medium text-gray-700 mb-1">
                                Donor Image/Logo
                            </label>
                            <div className="mt-1 flex items-center">
                                <img
                                    src="https://placehold.co/40x40/87ceeb/fff?text=D"
                                    alt="Donor"
                                    className="w-9 h-9 rounded-3xl object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <div className="mt-8 pt-6 border-t flex justify-end">
                    <button
                        type="submit"
                        className="inline-flex justify-center rounded-lg border border-transparent bg-green-600 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-150"
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodDonationForm;