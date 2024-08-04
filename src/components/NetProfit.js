import React from 'react';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import { CircularProgress } from '@mui/material';

const NetProfit = () => {
    return (
        <div className='flex justify-between lg:h-full bg-[#202028] text-[#fdfdfd] rounded'>
            <div className='p-3 flex flex-col justify-between'>
                <span>Net Profit</span>
                <h1 className='lg:text-xl xl:text-2xl font-bold'>$6759.25</h1>
                <span className='text-[#03b883]'><ArrowDropUpOutlinedIcon />3%</span>
            </div>
            <div className='p-3 flex flex-col'>
                <div className='grow relative flex justify-center items-center'>
                    <CircularProgress className='mx-auto' variant="determinate" value={70} size={70} thickness={5} />
                    <label className='absolute font-bold'>75%</label>
                </div>
                <label className='text-xs'>*The values here has been rounded off</label>
            </div>
        </div>
    )
}

export default NetProfit
