import React, { useState } from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InsertChartOutlinedRoundedIcon from '@mui/icons-material/InsertChartOutlinedRounded';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import CloseIcon from '@mui/icons-material/Close';
import menuIcon from '../images/menu.jpg';

const Sidebar = ({ sidebarOpen, toggleSidebar }) => {
    const [active, setActive] = useState('0');
    return (
        <div className={`${sidebarOpen ? 'absolute' : 'hidden'} left-0 top-0 w-full z-10 h-screen md:z-0 md:w-fit md:relative md:flex flex-col justify-between p-3 bg-navBg`}>
            {
                sidebarOpen ? (
                    <div className="flex flex-col items-end">
                        <CloseIcon className='text-iconClr mb-2 float-right md:hidden cursor-pointer' onClick={toggleSidebar} />
                    </div>
                ) : null
            }
            <div className="flex flex-col items-center">
                <img src={menuIcon} className="hidden md:block w-9 h-9 mb-6 cursor-pointer" alt='Menu' />
                <HomeOutlinedIcon className={`text-iconClr mb-5 cursor-pointer ${active === '0' ? 'active' : ''}`} fontSize='large' onClick={() => setActive('0')} />
                <InsertChartOutlinedRoundedIcon className={`text-iconClr mb-5 cursor-pointer ${active === '1' ? 'active' : ''}`} fontSize='large' onClick={() => setActive('1')} />
                <NoteAltOutlinedIcon className={`text-iconClr mb-5 cursor-pointer ${active === '2' ? 'active' : ''}`} fontSize='large' onClick={() => setActive('2')} />
                <AccountBalanceWalletOutlinedIcon className={`text-iconClr mb-5 cursor-pointer ${active === '3' ? 'active' : ''}`} fontSize='large' onClick={() => setActive('3')} />
                <ShoppingBagOutlinedIcon className={`text-iconClr mb-5 cursor-pointer ${active === '4' ? 'active' : ''}`} fontSize='large' onClick={() => setActive('4')} />
                {
                    sidebarOpen ? (
                        <>
                            <EmailOutlinedIcon className='text-iconClr mb-5 cursor-pointer' fontSize='large' />
                            <SettingsOutlinedIcon className='text-iconClr mb-5 cursor-pointer' fontSize='large' />
                            <NotificationsNoneOutlinedIcon className='text-iconClr mb-5 cursor-pointer' fontSize='large' />
                        </>
                    ) : null
                }
            </div>
            <div className="flex flex-col items-center">
                <ExitToAppOutlinedIcon className='text-iconClr mb-5 cursor-pointer' fontSize='large' />
            </div>
        </div>
    )
}

export default Sidebar
