import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import menuIcon from '../images/menu.jpg';
import profileIcon from '../images/sachin.jpg';

const Navbar = ({ toggleSidebar }) => {
    return (
        <nav className='bg-navBg'>
            <div className="flex justify-between p-3">
                <div className="flex justify-start">
                    <img src={menuIcon} className="md:hidden w-9 h-9 mr-4" alt='Menu' />
                    <div className='relative inline-block w-55'>
                        <input type="text" name="search-inp" id="search-inp" className='bg-searchBg outline-none border-0 w-full text-[#fdfdfd] py-1 pl-9 pr-1.5 rounded' placeholder='Search' />
                        <SearchIcon className='text-[#fdfdfd] absolute left-1 top-1 cursor-pointer' />
                    </div>
                </div>
                <div className='flex justify-end items-center'>
                    <div className='hidden md:inline-block bg-[#434449] rounded-3xl p-1.5 ml-2.5 cursor-pointer'><EmailOutlinedIcon className='text-iconClr w-6 h-6' /></div>
                    <div className='hidden md:inline-block bg-[#434449] rounded-3xl p-1.5 ml-2.5 cursor-pointer'><SettingsOutlinedIcon className='text-iconClr w-6 h-6' /></div>
                    <div className='hidden md:inline-block bg-[#434449] rounded-3xl p-1.5 ml-2.5 cursor-pointer'><NotificationsNoneOutlinedIcon className='text-iconClr w-6 h-6' /></div>
                    <div className="hidden md:inline-block ml-2.5 cursor-pointer"><img src={profileIcon} alt="Profile" width={35} height={35} className='rounded-full cursor-pointer' /></div>
                    <div className='inline-block md:hidden ml-2.5'><MenuIcon className='text-iconClr w-6 h-6 cursor-pointer' fontSize='large' onClick={toggleSidebar} /></div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
