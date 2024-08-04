import React from 'react';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import goalsIcon from '../images/goals.jpg';
import popularDishesIcon from '../images/popularDishes.jpg';
import menusIcon from '../images/menus.jpg';

const MoreOptions = () => {
    return (
        <div className='flex flex-col justify-evenly bg-[#202028] text-[#fdfdfd] p-1 rounded h-full'>
            <div className="grow flex justify-between items-center p-2">
                <div className="flex justify-start items-center">
                    <img src={goalsIcon} alt="Goals" />
                    <span className='ml-2'>Goals</span>
                </div>
                <div><div className='inline-block p-1 rounded-full bg-[#434449] cursor-pointer'><NavigateNextOutlinedIcon className='text-[#fdfdfd]' /></div></div>
            </div>
            <div className="grow flex justify-between items-center p-2">
                <div className="flex justify-start items-center">
                    <img src={popularDishesIcon} alt="Popular Dishes" />
                    <span className='ml-2'>Popular Dishes</span>
                </div>
                <div><div className='inline-block p-1 rounded-full bg-[#434449] cursor-pointer'><NavigateNextOutlinedIcon className='text-[#fdfdfd]' /></div></div>
            </div>
            <div className="grow flex justify-between items-center p-2">
                <div className="flex justify-start items-center">
                    <img src={menusIcon} alt="Menus" />
                    <span className='ml-2'>Menus</span>
                </div>
                <div><div className='inline-block p-1 rounded-full bg-[#434449] cursor-pointer'><NavigateNextOutlinedIcon className='text-[#fdfdfd]' /></div></div>
            </div>
        </div>
    )
}

export default MoreOptions
