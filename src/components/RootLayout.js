import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Content from './Content';

const RootLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setSidebarOpen(prev => !prev);
    }
    return (
        <div className='flex fixed h-screen min-w-[470px]'>
            <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="flex flex-col grow">
                <Navbar toggleSidebar={toggleSidebar} />
                <Content />
            </div>
        </div>
    )
}

export default RootLayout
