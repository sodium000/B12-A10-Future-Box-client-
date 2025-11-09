/* eslint-disable no-unused-vars */
import React, { use, useState } from "react";
import { motion } from "framer-motion";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
// import { Link } from "react-router";


const Login = () => {
    const [toggle, settoggle] = useState(false)
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    // const { singInwithGoogle } = use(AuthContext);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login Data:", formData);
    };

    //     const googleLogin = () => {
    //         singInwithGoogle()
    //         .then((result) => {
    //     console.log(result.user)

    //   }).catch((error) => {
    //     console.log(error);
    //     // ...
    //   });
    //     };
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-900 via-purple-900 to-indigo-900 p-4">
                <motion.div
                    initial={{ opacity: 0, rotateY: -15 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="bg-black/30 backdrop-blur-md p-8 rounded-2xl shadow-[0_0_40px_rgba(168,85,247,0.3)] w-full max-w-md border border-white/10"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 1, ease: "easeInOut" }}
                        className="text-3xl font-bold text-center text-white mb-6"
                    >
                        Welcome Back 👋
                    </motion.h2>

                    <motion.form
                        onSubmit={handleSubmit}
                        className="space-y-5"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, duration: 1.2, ease: "easeInOut" }}
                    >
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all duration-200"
                                required
                            />
                        </div>

                        <div className="relative">
                            <label className="block text-sm font-medium text-gray-300 mb-1">
                                Password
                            </label>
                            <input
                                type={toggle ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="••••••••"
                                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all duration-200"
                                required
                            />
                            <button onClick={(e) => {
                                e.preventDefault()
                                settoggle(!toggle)

                            }} >{toggle ? <IoIosEyeOff className="btn btn-xs border-0 rounded-full  absolute right-1.5 top-8 z-10 bg-linear-to-br from-gray-700 via-purple-700 to-indigo-700" /> : <IoIosEye className="btn btn-xs border-0 rounded-full absolute right-1.5 top-8  z-10 bg-linear-to-br from-gray-700 via-purple-700 to-indigo-700" />}
                            </button>
                        </div>

                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="w-full py-3 bg-linear-to-r from-violet-500 to-pink-500 text-white font-semibold cursor-pointer rounded-lg shadow-md hover:shadow-lg transition-all duration-100"
                        >
                            Login
                        </motion.button>
                    </motion.form>
                    <motion.button
                        type="submit"
                        // onClick={googleLogin}
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            delay: 1,
                            duration: 3,
                        }}
                        className="mt-6 flex justify-center items-center gap-2 w-full py-3 bg-linear-to-r from-violet-500 to-pink-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-100 cursor-pointer "
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

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 2.2,
                            duration: 1,
                            ease: "easeInOut",
                        }}
                        className="text-center text-sm text-gray-300 mt-6"
                    >
                        Don’t have an account?{" "}
                        <a to="/regiestration" className="text-pink-400 hover:underline">
                            Register now
                        </a>
                    </motion.p>
                </motion.div>
            </div>
        </div>
    );
};

export default Login;