/* eslint-disable no-unused-vars */
import React, { use, useState } from "react";
import { motion } from "framer-motion";
import { IoIosEye, IoIosEyeOff, IoMdKey } from "react-icons/io"; // Added Key icon
import { Link, useLocation, useNavigate } from "react-router";
import AuthContext from "../../AuthContext/AuthContext";
import Navbars from "../../NavBar/Navbars";
import Swal from "sweetalert2";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [toggle, settoggle] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const { Login, SignByGoogle } = use(AuthContext);
    const from = location.state?.from?.pathname || location.state || "/";

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Refactored login logic into a reusable function
    const performLogin = (email, password) => {
        Login(email, password)
            .then((userCredential) => {
                Swal.fire({
                    title: "Welcome back!",
                    text: "Login successful",
                    icon: "success",
                    timer: 2000,
                    showConfirmButton: false,
                });
                navigate(from, { replace: true });
            })
            .catch((error) => {
                const errorMessages = {
                    'auth/invalid-credential': "User not Found",
                    'auth/missing-password': "Please Input Password",
                    'auth/invalid-email': "Give Your Email",
                };
                Swal.fire({
                    title: errorMessages[error.code] || "Login Failed",
                    icon: "error",
                });
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        performLogin(formData.email, formData.password);
    };

    // Demo Login Handler
    const handleDemoLogin = () => {
        const demoEmail = "raisultonmoy5.dev@gmail.com";
        const demoPassword = "1234@TONMoY";
        
        setFormData({
            email: demoEmail,
            password: demoPassword,
        });

        // Trigger login immediately after state update
        performLogin(demoEmail, demoPassword);
    };

    const googleLogin = () => {
        SignByGoogle()
            .then(() => {
                Swal.fire({ title: "Login Successfully", icon: "success" });
                navigate(from, { replace: true });
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className="bg-linear-to-br from-gray-900 via-purple-900 to-indigo-900">
            <Navbars />
            <div className="min-h-[92vh] flex items-center justify-center p-4 sm:p-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-black/30 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-[0_0_40px_rgba(168,85,247,0.3)] w-full max-w-md border border-white/10"
                >
                    <motion.h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-6">
                        Welcome Back 👋
                    </motion.h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/5 focus:ring-2 focus:ring-violet-500 outline-none"
                                required
                            />
                        </div>

                        <div className="relative">
                            <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
                            <input
                                type={toggle ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="••••••••"
                                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/5 focus:ring-2 focus:ring-violet-500 outline-none"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => settoggle(!toggle)}
                                className="absolute right-3 top-9 text-gray-400 hover:text-white"
                            >
                                {toggle ? <IoIosEyeOff size={20} /> : <IoIosEye size={20} />}
                            </button>
                        </div>

                        <div className="flex flex-col gap-3 pt-2">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full py-3 bg-gradient-to-r from-violet-600 to-pink-600 text-white font-bold rounded-lg cursor-pointer"
                            >
                                Login
                            </motion.button>

                            {/* Demo Button */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="button"
                                onClick={handleDemoLogin}
                                className="w-full py-3 bg-white/5 border border-white/20 text-white font-medium rounded-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-colors cursor-pointer"
                            >
                                <IoMdKey className="text-pink-400" />
                                One-Click Demo Login
                            </motion.button>
                        </div>
                    </form>

                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-white/10"></span></div>
                        <div className="relative flex justify-center text-xs uppercase"><span className="bg-transparent px-2 text-gray-400">Or continue with</span></div>
                    </div>

                    <motion.button
                        onClick={googleLogin}
                        whileHover={{ scale: 1.02 }}
                        className="w-full py-2.5 bg-white text-gray-900 font-semibold rounded-lg flex items-center justify-center gap-2 cursor-pointer"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335"/>
                        </svg>
                        Google
                    </motion.button>

                    <p className="text-center text-sm text-gray-400 mt-6">
                        Don’t have an account?{" "}
                        <Link to="/auth/regiestration" className="text-pink-400 hover:underline">Register</Link>
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Login;