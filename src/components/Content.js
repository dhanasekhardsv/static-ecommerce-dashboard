import React from 'react';
import OrderStats from './OrderStats';
import NetProfit from './NetProfit';
import MoreOptions from './MoreOptions';
import Activity from './Activity';
import RecentOrders from './RecentOrders';
import Feedback from './Feedback';

const Content = () => {
    return (
        <div className='grow p-3 lg:grid grid-cols-contentLayout grid-rows-contentHeight bg-[#141416] overflow-y-scroll'>
            <div className='text-[#fdfdfd] col-start-1 col-end-3 p-3'>
                <h1 className='font-bold text-2xl md:text-3xl'>Dashboard</h1>
            </div>
            <div className='flex flex-wrap justify-between p-3'>
                <OrderStats />
            </div>
            <div className='p-3'>
                <NetProfit />
            </div>
            <div className='p-3'>
                <Activity />
            </div>
            <div className='p-3'>
                <MoreOptions />
            </div>
            <div className='p-3'>
                <RecentOrders />
            </div>
            <div className="p-3">
                <Feedback />
            </div>
        </div>
    )
}

export default Content
