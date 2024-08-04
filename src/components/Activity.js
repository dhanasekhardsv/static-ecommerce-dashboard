import React from 'react';
import { MenuItem, Select } from '@mui/material';
import { BarChart } from '@mui/x-charts';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

const Activity = () => {
    const [filter, setFilter] = React.useState('Weekly');
    const handleChange = (event) => {
        setFilter(event.target.value);
    };
    return (
        <div className='flex flex-col bg-[#202028] text-[#fdfdfd] p-1 rounded'>
            <div className='flex justify-between p-2'>
                <h2 className='text-2xl font-bold'>Activity</h2>
                <Select value={filter} className='w-fit h-10 outline-none bg-[#434449] text-[#fdfdfd]' sx={{ borderRadius: '24px', color: '#fdfdfd' }} onChange={handleChange}>
                    <MenuItem value={'Daily'}>Daily</MenuItem>
                    <MenuItem value={'Weekly'}>Weekly</MenuItem>
                    <MenuItem value={'Monthly'}>Monthly</MenuItem>
                </Select>
            </div>
            <div className="p-2">
                <BarChart
                    sx={() => ({
                        [`.${axisClasses.root}`]: {
                            [`.${axisClasses.tick}, .${axisClasses.line}`]: {
                                strokeWidth: 0,
                            },
                            [`.${axisClasses.tickLabel}`]: {
                                fill: '#a6a7ac'
                            },
                        },
                    })}
                    xAxis={[
                        {
                            id: 'barCategories',
                            data: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                            scaleType: 'band',
                        },
                    ]}
                    series={[
                        {
                            data: [4000, 10000, 4500, 8000, 3000, 4000, 5000, 6000, 6500, 6800, 5000, 2000, 7000, 8000, 7500, 13000, 17000, 12000, 8500, 5000, 11000, 7500, 6000],
                            color: '#7294ff'
                        },
                    ]}
                    height={250}
                />
            </div>
        </div>
    )
}

export default Activity
