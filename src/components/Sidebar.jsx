import React from 'react'
import {
    BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,
    BsListCheck, BsMenuButtonWideFill, BsFillGearFill, BsPersonCircle
}
    from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
    const name = localStorage.getItem('name');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('email')
        navigate("/")
    }
    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>

            <div className='sidebar-title'>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>

            </div>
            <div className='side-photo'>
                <img src='vite.svg' alt='user' className='image' />
                <p>{name}</p>
            </div>

            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <a href="/home">
                        <BsGrid1X2Fill className='icon' /> Dashboard
                    </a>
                </li>


                <li className='sidebar-list-item'>
                    <a href="/profile">
                        <BsPersonCircle className='icon' /> Profile
                    </a>
                </li>

                <li className='sidebar-list-item'>
                    <a href="/expense">
                        <BsMenuButtonWideFill className='icon' /> Expense
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="" onClick={logout}>
                        <BsMenuButtonWideFill className='icon' /> LogOut
                    </a>
                </li>

            </ul>
        </aside>
    )
}

export default Sidebar