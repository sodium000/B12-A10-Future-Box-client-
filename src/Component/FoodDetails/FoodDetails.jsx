/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import Navbars from "../../NavBar/Navbars";
import styled from 'styled-components';
import { motion, AnimatePresence } from "framer-motion";
import AuthContext from "../../AuthContext/AuthContext";
import { FiTag } from "react-icons/fi";
import { section } from "framer-motion/client";


  

const FoodDetails = () => {
  const { user } = useContext(AuthContext)
  const FoodData = useLoaderData();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [FoodList, setFoodList] = useState()

  const {
    Date,
    Description,
    Donor_img,
    Donor_name,
    Email,
    FoodImag,
    Food_name,
    Food_serve,
    Location,
    _id
  } = FoodData;

  const getUser = async () => {
    try {
      setLoading(true)
    }

    finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      getUser();

    }
  }, [user]);



  const reqFood = (event) => {
    event.preventDefault();
    if (!user) {
      navigate('/login');
      return;
    }
    const ReqLoaction = event.target.Location.value;
    const Why_FOOD = event.target.textarea.value;
    const Tearm = event.target.check.checked;
    const PhoneNumber = event.target.PhoneNumber.value;

    const FoodReq = {
      foodId: _id,
      foodName: Food_name,
      donorEmail: Email,
      Donor_name,
      ReqLoaction,
      Why_FOOD,
      Tearm,
      PhoneNumber: Number(PhoneNumber),
      Req_Name: user.displayName,
      Reqemail: user.email,
      Req_photoURL: user.photoURL || '',
      statues: "Pending"
    };
    fetch('https://b12-a10-future-box-server-eight.vercel.app/api/requests', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(FoodReq) })
    .then(data=>console.log(data))
    setIsModalOpen(false);
  }



  function openEdit() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }



  /**
   * tabil function************************************************** 
   */


  //  useEffect(() => {
  //   const fetchFoodList = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await fetch(`https://b12-a10-future-box-server-eight.vercel.app/food/reqlist/${_id}`);
  //       const data = await response.json();
  //       setFoodList(data);
  //     } catch (error) {
  //       console.error('Error fetching food list:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   if (_id) {
  //     fetchFoodList();
  //   }
  // }, [_id]);

      const fetchFoodList = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://b12-a10-future-box-server-eight.vercel.app/food/reqlist/${_id}`);
        const data = await response.json();
        setFoodList(data);
      } catch (error) {
        console.error('Error fetching food list:', error);
      } finally {
        setLoading(false);
      }
    };

      useEffect(() => {
        if (user?.email) {
          fetchFoodList();
        }
      }, [user?.email]);

    

  


  const [notification, setNotification] = useState(null);

    const getClasses = (statues) => {
    if (statues === "Accepted")
      return { text: "text-green-700", bg:"bg-green-100", badgeBg:"bg-green-100", badgeText: "text-green-800" };
    if (statues === "Rejected")
      return { text: "text-red-700", bg: "bg-red-100", badgeBg: "bg-red-100", badgeText: "text-red-800" };
    return { text: "text-gray-500", bg: "bg-white", badgeBg: "bg-yellow-100", badgeText: "text-yellow-800" };
  };


    const handleAction = async (id, action) => {
       try {
      const res = await fetch(`https://b12-a10-future-box-server-eight.vercel.app/food/requpdate/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            statues : action
        }),
      });
      const updated = await res.json();
      console.log(updated)
      fetchFoodList()
    }
    catch (error) {
      alert("Update failed.");
    }
  };

  return (
    <>
      <Navbars></Navbars>
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 my-6 sm:my-8 lg:my-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <div className="w-full">
            <div className="rounded-2xl overflow-hidden shadow-xl bg-base-100">
              <img
                src={FoodImag}
                alt=""
                className="w-full h-[250px] sm:h-[300px] lg:h-[360px] object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-2xl p-4 sm:p-6 shadow-xl bg-base-100">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 break-words">{Food_name}</h1>
              <p className="text-sm sm:text-base text-base-content/70 break-words">
                {Description}
              </p>
            </div>

            <div className="rounded-2xl p-4 sm:p-6 shadow-xl bg-base-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <DetailItem label="Quantity" value={Food_serve} />
                <DetailItem label="Pickup Location" value={Location} />
                <DetailItem label="Expire Date" value={Date} />
              </div>
            </div>

            <div className="rounded-2xl p-4 sm:p-6 shadow-xl bg-base-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <div className="avatar">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full ring ring-primary/30 ring-offset-2 ring-offset-base-100 overflow-hidden">
                    <img src={Donor_img} alt="" />
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-base sm:text-lg truncate">
                    {Email}
                  </p>
                  <p className="text-xs sm:text-sm text-base-content/70 truncate">
                    {Donor_name}
                  </p>
                </div>
              </div>

              <button onClick={() => openEdit()} className="btn btn-primary w-full sm:w-auto btn-wide">
                Request Food
              </button>
            </div>

            <button
              onClick={() => navigate(-1)}
              className="btn btn-outline btn-secondary w-fit"
            >
              ← Back
            </button>
          </div>
        </div>
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -50 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            >
              <StyledWrapper>
                <div className="form-container">
                  <form onSubmit={reqFood} className="form">
                    <div className="form-group">
                      <label htmlFor="textarea">Write Location</label>
                      <input required type="text" id="email" name="Location" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="textarea">Why need Food</label>
                      <textarea name="textarea" id="textarea" rows={6} className="resize-y" required defaultValue={""} />
                    </div>
                    <div className="rounded-lg w-full">
                      <label className="text-[#717171] text-sm">
                        Phone number
                      </label>
                      <div className="relative mt-2 w-full text-white">
                        <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                          <select className="text-sm outline-none rounded-lg h-full bg-transparent">
                            <option>BD</option>
                          </select>
                        </div>
                        <input required type="text" name="PhoneNumber" placeholder="+1 (555) 000-000" className="w-full pl-20 pr-3 py-2 appearance-none bg-transparent outline-none border border-gray-700 focus:border-[#e81cff] shadow-sm rounded-lg" />
                      </div>
                    </div>
                    <label className="cyberpunk-checkbox-label">
                      <input type="checkbox" name="check" className="cyberpunk-checkbox" />
                      I have read and agree to the [Terms of Service] and [Privacy Policy].</label>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-400 mb-1">
                        Current Status (Internal)
                      </label>
                      <p
                        className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-amber-100 text-yellow-800`}>
                        <FiTag className="h-4 w-4 mr-1" />
                        Pending
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between gap-3">
                      <button className="form-submit-btn w-full sm:w-auto" type="submit">Request Food</button>
                      <button onClick={closeModal} className="form-submit-btn w-full sm:w-auto" type="button">Close</button>
                    </div>
                  </form>
                </div>
              </StyledWrapper>
            </motion.div>
          )}
        </AnimatePresence>
      </section>



      {/* ****************************Table*************************** */}


      {(user.email === Email)?(
      <section className="mt-20">
        {
          loading ? (<div className="text-center py-8">Loading food requests...</div>)
          : FoodList.length === 0 ? (<div className="text-center py-8">No food requests yet</div>)
          :(<div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      {notification && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 px-6 py-3 rounded-xl shadow-2xl bg-white text-gray-800 font-semibold z-50">
          {notification}
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6 sm:mb-8 text-center sm:text-left">
          Food Request Approval Queue
        </h1>
        <div className="hidden md:block shadow-2xl rounded-xl overflow-hidden bg-white">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-indigo-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Requester
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Item
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Locaton
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Donor Name
                </th>
                <th className="px-6 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {FoodList.map(({ _id, Req_Name, foodName, Donor_name, statues,ReqLoaction}) => {
                const c = getClasses(statues);
                const disabled = statues !== "Pending";
                return (
                  <tr key={_id} className={!disabled ? "hover:bg-gray-50" : ""}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{Req_Name}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{foodName}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{ReqLoaction}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{Donor_name}</td>
                    <td className={`py-4 px-6 text-sm text-center font-medium ${c.text} ${c.bg}`}>
                      {statues}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-2">
                        <button
                          onClick={() => handleAction(_id, "Accepted")}
                          disabled={disabled}
                          className={`bg-green-500 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 text-sm ${
                            disabled
                              ? "opacity-50 cursor-not-allowed"
                              : "hover:bg-green-600 hover:shadow-lg"
                          }`}
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => handleAction(_id, "Rejected")}
                          disabled={disabled}
                          className={`bg-red-500 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 text-sm ${
                            disabled
                              ? "opacity-50 cursor-not-allowed"
                              : "hover:bg-red-600 hover:shadow-lg"
                          }`}
                        >
                          Reject
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="md:hidden space-y-4">
          {FoodList.map(({ _id, Req_Name, foodName,statues, Donor_name,ReqLoaction }) => {
            const c = getClasses(statues);
            const disabled = statues !== "Pending";
            return (
              <div key={_id} className="bg-white shadow-xl rounded-xl p-4 border border-gray-200">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-lg font-bold text-gray-900"> Requester :<span> {Req_Name}</span></div>
                  <div className={`px-3  py-1 text-sm font-semibold rounded-full ${c.badgeBg} ${c.badgeText}`}>
                    {statues}
                  </div>
                </div>
                <div className="text-gray-600 mb-2">
                  <span className="font-medium">FoodName :</span> {foodName}
                </div>
                <div className="text-gray-600 mb-4">
                  <span className="font-medium">Donor Name : </span> {Donor_name}
                </div>
                <div className="text-gray-600 mb-4">
                  <span className="font-medium">Location : </span> {ReqLoaction}
                </div>
                <div className="flex space-x-3">
                  <button
                    onClick={() => handleAction(_id, "Accepted")}
                    disabled={disabled}
                    className={`flex-1 text-white font-bold py-2 rounded-lg shadow-md transition duration-300 ${
                      disabled
                        ? "bg-gray-400 opacity-80 cursor-not-allowed"
                        : "bg-green-500 hover:bg-green-600 hover:shadow-lg"
                    }`}
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleAction(_id, "Rejected")}
                    disabled={disabled}
                    className={`flex-1 text-white font-bold py-2 rounded-lg shadow-md transition duration-300 ${
                      disabled
                        ? "bg-gray-400 opacity-80 cursor-not-allowed"
                        : "bg-red-500 hover:bg-red-600 hover:shadow-lg"
                    }`}
                  >
                    Reject
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>)
        }
      </section>
      ):""}
  </>
  );
};

const StyledWrapper = styled.div`
  .form-container {
    width: 100%;
    max-width: 400px;
    background: linear-gradient(#212121, #212121) padding-box,
                linear-gradient(145deg, transparent 35%,#e81cff, #40c9ff) border-box;
    border: 2px solid transparent;
    padding: 24px 20px;
    font-size: 14px;
    font-family: inherit;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-sizing: border-box;
    border-radius: 16px;
    margin: 20px;
    
    @media (max-width: 640px) {
      padding: 20px 16px;
      max-width: calc(100% - 40px);
      margin: 10px;
    }
  }

  .form-container button:active {
    scale: 0.95;
  }

  .form-container .form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .form-container .form-group {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .form-container .form-group label {
    display: block;
    margin-bottom: 5px;
    color: #717171;
    font-weight: 600;
    font-size: 12px;
  }

  .form-container .form-group input {
    width: 100%;
    padding: 12px 16px;
    border-radius: 8px;
    color: #fff;
    font-family: inherit;
    background-color: transparent;
    border: 1px solid #414141;
  }

  .form-container .form-group textarea {
    width: 100%;
    padding: 12px 16px;
    border-radius: 8px;
    resize: vertical;
    color: #fff;
    min-height: 96px;
    border: 1px solid #414141;
    background-color: transparent;
    font-family: inherit;
    
    @media (max-width: 640px) {
      min-height: 80px;
    }
  }

  .form-container .form-group input::placeholder {
    opacity: 0.5;
  }

  .form-container .form-group input:focus {
    outline: none;
    border-color: #e81cff;
  }

  .form-container .form-group textarea:focus {
    outline: none;
    border-color: #e81cff;
  }

  .form-container .form-submit-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: inherit;
    color: #717171;
    font-weight: 600;
    background: #313131;
    border: 1px solid #414141;
    padding: 12px 16px;
    font-size: inherit;
    gap: 8px;
    margin-top: 8px;
    cursor: pointer;
    border-radius: 6px;
    transition: all 0.3s ease;
    
    @media (max-width: 640px) {
      width: 100%;
    }
  }

  .form-container .form-submit-btn:hover {
    background-color: #fff;
    border-color: #fff;
  }
    /**
    for chaeck box css
    */
    .cyberpunk-checkbox {
    appearance: none;
    width: 25px;
    height: 20px;
    border: 2px solid #30cfd0;
    border-radius: 5px;
    background-color: transparent;
    display: inline-block;
    position: relative;
    margin-right: 10px;
    cursor: pointer;
  }

  .cyberpunk-checkbox:before {
    content: "";
    background-color: #30cfd0;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 10px;
    height: 10px;
    border-radius: 3px;
    transition: all 0.3s ease-in-out;
  }

  .cyberpunk-checkbox:checked:before {
    transform: translate(-50%, -50%) scale(1);
  }

  .cyberpunk-checkbox-label {
    font-size: 15px;
    color: #d3c8c8;
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
  }`;

export default FoodDetails;

function DetailItem({ label, value }) {
  return (
    <div className="p-4 rounded-xl bg-base-200">
      <p className="text-sm text-base-content/70">{label}</p>
      <p className="mt-1 font-semibold">{value}</p>
    </div>
  );
}
