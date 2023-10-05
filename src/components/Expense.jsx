import React, { useContext, useEffect, useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import axios from 'axios';
import { server } from './Sign';

const Expense = () => {
    const [expense, setExpense] = useState([]);
    const [maxIncome, setMaxIncome] = useState();

    const [data, setData] = useState({ category: "", amount: "" });
    const email = localStorage.getItem('email');

    const handleClick = (e) => {
        e.preventDefault();
        try {
            createExpense();

        } catch (error) {
            console.log(error);

        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const createExpense = async () => {
        try {
            const res = await axios.post(`${server}/create/${email}`, { category: data.category, amount: data.amount }, {
                withCredentials: true,
            })
            setData({ category: "", amount: "" })


        } catch (error) {
            console.log(error);

        }
    }

    const getExpense = async () => {
        try {
            const res = await axios.get(`${server}/expense/${email}`, {
                withCredentials: true,
            })
            setMaxIncome(res.data.income);
            setExpense(res.data.expense)

        } catch (error) {
            console.log(error);

        }
    }
    useEffect(() => {
        getExpense();

    }, [expense])

    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }
    return (
        <div className='grid-container'>
            <Header OpenSidebar={OpenSidebar} />
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />

            <div className='main-container exp2'>
                <h1>EXPENSE</h1>
                <h3>Total Income: {maxIncome}</h3>

                <div>
                    <div>
                        <form className='exp' onSubmit={handleClick}>
                            <div className='expense-input'>
                                <h2>Category</h2>
                                <input type='text' name='category' placeholder='Enter Category' className='input-exp' value={data.category} required onChange={handleSubmit} />

                            </div>
                            <div className='expense-input'>
                                <h2>Amount</h2>
                                <input type='Number' name='amount' max={maxIncome} placeholder='Enter the Amount Spent' className='input-exp' value={data.amount} required onChange={handleSubmit} />

                            </div>
                            <button className='exp-but' type='submit'>
                                Add
                            </button>
                        </form>

                    </div>

                    <div></div>

                </div>
                <div>
                    <h2>Previous Data</h2>
                    <div className='exp-prev'>
                        <table className='exp-table'>
                            <tr>
                                <th>Category</th>
                                <th>Amount</th>
                            </tr>
                            {expense &&

                                expense.map((e, i) => (
                                    <tr key={i}>
                                        <td>{e.category}</td>
                                        <td>{e.amount}</td>
                                    </tr>
                                ))
                            }
                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Expense
