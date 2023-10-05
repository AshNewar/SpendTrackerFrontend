import React, { useContext, useState } from "react";
import "./Login.css";
import { MdEmail } from "react-icons/md";
import { BiSolidLock } from "react-icons/bi";

import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { auth, provider } from './Firebase'
import { signInWithPopup } from 'firebase/auth'
import axios from "axios"

export const server = 'http://localhost:8000'
const LoginPage = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({ name: "", income: "" });
    const handleClick = (e) => {
        e.preventDefault();
        signInWithPopup(auth, provider).then((inf) => {
            uploadData(inf.user.email);
        })

    }




    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const uploadData = async (email) => {
        try {
            localStorage.setItem('email', email);
            localStorage.setItem('name', data.name);

            const res = await axios.post(`${server}/create`, { email: email, name: data.name, income: data.income }, {
                withCredentials: true,
            })
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
                        <h1 className="login-title" style={{ color: "black" }}>Login</h1>
                        <form onSubmit={handleClick}>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="login-form-group"
                            >
                                <MdEmail size={18} />

                                <input
                                    className="login-input"
                                    type="name"
                                    name="name"
                                    value={data.name}
                                    onChange={handleSubmit}
                                    required
                                    placeholder="Name"
                                />
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="login-form-group"
                            >
                                <BiSolidLock size={18} />
                                <input
                                    className="login-input"
                                    type="Number"
                                    name="income"
                                    value={data.income}
                                    onChange={handleSubmit}
                                    required
                                    placeholder="Income"
                                />
                            </motion.div>
                            <div className="login-bottom">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="login-submit-button"
                                    style={{ color: "black" }}
                                    onClick={() => navigate('/')}
                                >
                                    Login
                                </motion.button>

                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="login-submit-button"
                                    style={{ color: "black" }}
                                >
                                    Register
                                </motion.button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default LoginPage;