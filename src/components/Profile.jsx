import React, { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

const Profile = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }
    return (
        <div className='grid-container'>
            <Header OpenSidebar={OpenSidebar} />
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />

            <main className='main-container'>
                <h1>PROFILE</h1>
                <div className='profile-container'>
                    <div>
                        <img src='vite.svg' className='profile-pic' />
                    </div>
                    <div>
                        <p>
                            Name
                        </p>
                        <p>User Details</p>
                    </div>
                </div>
            </main>


        </div>
    )
}

export default Profile
