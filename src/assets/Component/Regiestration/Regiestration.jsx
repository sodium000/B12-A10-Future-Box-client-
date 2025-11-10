/* eslint-disable no-unused-vars */
import React, { use, useState } from "react";
import { motion } from "framer-motion";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { Link } from "react-router";
import AuthContext from "../../AuthContext/AuthContext";



const Regiestration = () => {
  const [toggle, settoggle] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    Photo_Url: "",
  });

    const { singInwithGoogle } = use(AuthContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

    const googleLogin = () => {
      singInwithGoogle()
        .then((result) => {
          console.log(result.user)
          const newUser = {
            name: result.user.displayName,
            email: result.user.email,
            photo: result.user.photoURL
          }


          // fetch('http://localhost:3000/users', {
          //   method : 'POST',
          //   headers :{
          //     'content-type' : 'application/json'
          //   },
          //   body : JSON.stringify(newUser)
          // })
          // .then(res => res.json())
          // .then(data =>{
          //   console.log("repson come from", data)
          // })


        }).catch((error) => {
          console.log(error);
          // ...
        });
    };



  /**
   * 
   * password validation 
   * 
   */


  const newErrors = {};
  const [errors, setErrors] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    const password = formData.password
    if (!password || password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
      setErrors(newErrors)
      return 
    }
    if (!/[a-z]/.test(password)) {
      newErrors.password = "Use at least one lowercase letter.";
      setErrors(newErrors)
      return 
    }
    if (!/[A-Z]/.test(password)) {
      newErrors.password = "Use at least one uppercase letter.";
      setErrors(newErrors)
      return 
    }
    if (!/[0-9]/.test(password)) {
      newErrors.password = "Use at least one digit.";
      setErrors(newErrors)
      return 
    }
  };
  return (
    <div>
      <div className="min-h-screen  flex items-center justify-center bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-md border border-white/20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-3xl font-bold text-center text-white mb-6"
          >
            Create an Account
          </motion.h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
            >
              <label className="block text-sm font-medium text-white mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300"
                required
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2 }}
            >
              <label className="block text-sm font-medium text-white mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com"
                className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 3 }}
              className="relative"
            >
              <label className="block text-sm font-medium text-white mb-1">
                Password
              </label>
              <input
               type={toggle ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300"
                required
              />
              <button onClick={(e) => {
                e.preventDefault()
                settoggle(!toggle)

              }} >{toggle ? <IoIosEyeOff className="btn btn-xs border-0 rounded-full  absolute right-1.5 top-8 z-10 bg-linear-to-br from-orange-600 via-purple-600 to-pink-500" /> : <IoIosEye className="btn btn-xs border-0 rounded-full absolute right-1.5 top-8  z-10 bg-linear-to-br from-orange-600 via-purple-600 to-pink-500" />}
              </button>
              {
                errors.password && <p className="text-red-700 text-sm">{errors.password}</p>
              }
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 4 }}
            >
              <label className="block text-sm font-medium text-white mb-1">
                Photo Url
              </label>
              <input
                type="text"
                name="Photo_Url"
                value={formData.Photo_Url}
                onChange={handleChange}
                placeholder="http://localhost:5173/"
                className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300"
                required
              />
            </motion.div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-full py-3 bg-linear-to-r from-indigo-500 to-pink-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              Register
            </motion.button>

            <motion.button
              onClick={()=>googleLogin()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-full flex justify-center items-center gap-2 py-3 bg-linear-to-r from-indigo-500 to-pink-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <svg
                className="rounded-2xl"
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </motion.button>
          </form>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 5 }}
            className="text-center text-sm text-gray-200 mt-6"
          >
            Already have an account?{" "}
            <Link  to="/auth/login" className="text-pink-300 hover:underline">
              Login here
            </Link>
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Regiestration;