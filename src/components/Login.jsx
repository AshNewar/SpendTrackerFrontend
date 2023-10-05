import React, { useContext, useState } from "react";
import "./Login.css";
import { MdEmail } from "react-icons/md";
import { BiSolidLock } from "react-icons/bi";

import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { auth, provider } from './Firebase'
import { signInWithPopup } from 'firebase/auth'
import axios from "axios"
import './Login.css';
import { server } from './Sign';


const Login = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        signInWithPopup(auth, provider).then((inf) => {
            localStorage.setItem('email', inf.user.email);

            getUser(inf.user.email);
        })
    }
    const getUser = async (email) => {
        try {

            const res = await axios.get(`${server}/details/${email}`, {
                withCredentials: true,
            })
            console.log(res)
            localStorage.setItem('name', res.data.user.name);

            navigate("/home");


        } catch (error) {
            console.log(error);

        }

    }
    return (
        <div>
            <div className="login-box">
                <div className="login-box2">
                    <div className='login-section1'>
                        <motion.div whileHover={{ scale: 1.08 }} >
                            <img
                                className='login-image'
                                src="/z.png"
                                width={350}
                                height={350}
                                alt="PuppyLove"
                            />
                        </motion.div>
                    </div>
                    <div className="login-container">
                        <div className="login-bottom">


                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="login-submit-button"
                                style={{ color: "black" }}
                                onClick={() => navigate('/signup')}
                            >
                                SignIn
                            </motion.button>
                        </div>
                        <div className="login-bottom">


                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="login-submit-button"
                                style={{ color: "black" }}
                                onClick={handleClick}
                            >
                                Login
                            </motion.button>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Login
