import React, { useContext, useEffect, useState } from 'react'
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill }
    from 'react-icons/bs'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line }
    from 'recharts';
import Header from './Header';
import Sidebar from './Sidebar';
import axios from 'axios';
import { server } from './Sign';
import { useNavigate } from 'react-router-dom';


function Home() {
    const [data, setData] = useState([]);
    const [income, setIncome] = useState();
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
    const email = localStorage.getItem('email');
    const navigate = useNavigate();


    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }
    const getExpense = async () => {
        try {
            const res = await axios.get(`${server}/expense/${email}`, {
                withCredentials: true,
            })
            setIncome(res.data.income);
            // console.log(res.data);
            setData(res.data.expense)

        } catch (error) {
            console.log(error);

        }
    }
    useEffect(() => {
        const val = localStorage.getItem('email');
        if (!val) {
            console.log('Login First')
            navigate("/")
            return
        }
        getExpense();

    }, [data])


    return (
        <div className='grid-container'>
            <Header OpenSidebar={OpenSidebar} />
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />

            <main className='main-container'>
                <div className='main-title'>
                    <h3>DASHBOARD</h3>
                </div>

                <div className='main-cards'>

                    <div className='card'>
                        <div className='card-inner'>
                            <h3>Total Income</h3>
                            <BsFillGrid3X3GapFill className='card_icon' />
                        </div>
                        <h1>120xxxx</h1>
                    </div>
                    <div className='card'>
                        <div className='card-inner'>
                            <h3>Total Spent</h3>
                            <BsPeopleFill className='card_icon' />
                        </div>
                        <h1>33xx</h1>
                    </div>
                    <div className='card'>
                        <div className='card-inner'>
                            <h3>Saving</h3>
                            <BsFillBellFill className='card_icon' />
                        </div>
                        <h1>42xxx</h1>
                    </div>
                </div>

                {data &&
                    <div className='charts'>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                width={500}
                                height={300}
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                {/* <CartesianGrid strokeDasharray="8 8" /> */}
                                <XAxis dataKey="category" />
                                <YAxis domain={[0, income]} />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="amount" fill="#8884d8" />
                                {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
                            </BarChart>
                        </ResponsiveContainer>

                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart
                                width={500}
                                height={300}
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                {/* <CartesianGrid strokeDasharray="3 4" /> */}
                                <XAxis dataKey="category" />
                                <YAxis domain={[0, income]} />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="amount" stroke="#8884d8" activeDot={{ r: 8 }} />
                                {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
                            </LineChart>
                        </ResponsiveContainer>

                    </div>}
            </main>

        </div>

    )
}

export default Home