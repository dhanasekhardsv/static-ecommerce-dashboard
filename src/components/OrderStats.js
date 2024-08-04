import React from 'react';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import totalOrdersIcon from '../images/totalOrders.jpg';
import totalDeliveredIcon from '../images/totalDelivered.jpg';
import totalCancelledIcon from '../images/totalCancelled.jpg';
import totalRevenueIcon from '../images/totalRevenue.jpg';

const OrderStats = () => {
    return (
        <>
            <div className='text-[#fdfdfd] bg-[#202028] rounded p-3 h-fit min-w-36 mb-2 lg:m-0'>
                <img src={totalOrdersIcon} alt="Total Orders" />
                <label>Total Orders</label>
                <div className='flex justify-between items-center mt-2'>
                    <span className='text-2xl font-bold'>75</span>
                    <span className='text-[#03b883] ml-2.5'><ArrowDropUpOutlinedIcon />3%</span>
                </div>
            </div>
            <div className='text-[#fdfdfd] bg-[#202028] rounded p-3 h-fit min-w-36'>
                <img src={totalDeliveredIcon} alt="Total Orders" />
                <label>Total Delivered</label>
                <div className='flex justify-between items-center mt-2'>
                    <span className='text-2xl font-bold'>70</span>
                    <span className='text-[#d7504e] ml-2.5'><ArrowDropDownOutlinedIcon />3%</span>
                </div>
            </div>
            <div className='text-[#fdfdfd] bg-[#202028] rounded p-3 h-fit min-w-36'>
                <img src={totalCancelledIcon} alt="Total Orders" />
                <label>Total Cancelled</label>
                <div className='flex justify-between items-center mt-2'>
                    <span className='text-2xl font-bold'>05</span>
                    <span className='text-[#03b883] ml-2.5'><ArrowDropUpOutlinedIcon />3%</span>
                </div>
            </div>
            <div className='text-[#fdfdfd] bg-[#202028] rounded p-3 h-fit min-w-36'>
                <img src={totalRevenueIcon} alt="Total Orders" />
                <label>Total Revenue</label>
                <div className='flex justify-between items-center mt-2'>
                    <span className='text-2xl font-bold'>$12k</span>
                    <span className='text-[#d7504e] ml-2.5'><ArrowDropDownOutlinedIcon />3%</span>
                </div>
            </div>
        </>
    )
}

export default OrderStats
