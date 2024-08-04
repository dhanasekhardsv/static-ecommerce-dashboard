import React from 'react';
import { styled, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import profilePic from '../images/sachin.jpg';

function createData(customer, orderNo, amount, status) {
    return { customer: { name: customer.name, profile: customer.profile }, orderNo, amount, status };
}

const rows = [
    createData({ name: 'Wade Warren', profile: profilePic }, '15478251', '124.00', 'Delivered'),
    createData({ name: 'Jane Cooper', profile: profilePic }, '15478252', '365.02', 'Delivered'),
    createData({ name: 'Guy Hawkins', profile: profilePic }, '15478253', '45.88', 'Cancelled'),
    createData({ name: 'Kristin Watson', profile: profilePic }, '15478254', '65.00', 'Pending'),
    createData({ name: 'Cody Fisher', profile: profilePic }, '15478255', '545.00', 'Delivered'),
    createData({ name: 'Savannah Nguyen', profile: profilePic }, '15478256', '128.20', 'Delivered'),
];

const CustTableCellTh = styled(TableCell)(() => ({
    color: '#fdfdfd',
    fontWeight: 'bold',
    borderBottom: '1px solid #434449',
    '&:first-child': {
        paddingLeft: 0
    }
}))

const CustTableCellTd = styled(TableCell)(() => ({
    color: '#fdfdfd',
    borderBottom: '1px solid #434449'
}))

const RecentOrders = () => {
    return (
        <div className='bg-[#202028] text-[#fdfdfd] p-1 rounded max-h-96 overflow-y-scroll'>
            <div className='p-2'>
                <h2 className='text-2xl font-bold'>Recent Orders</h2>
            </div>
            <div className='p-2 grow'>
                <Table aria-label="Recent Orders">
                    <TableHead>
                        <TableRow>
                            <CustTableCellTh>Customer</CustTableCellTh>
                            <CustTableCellTh align="center">Order No.</CustTableCellTh>
                            <CustTableCellTh align="center">Amount</CustTableCellTh>
                            <CustTableCellTh>Status</CustTableCellTh>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.customer.name} sx={{ '&:last-child td, &:last-child th': { border: 0 }, '& td:first-child': { paddingLeft: 0 } }}>
                                <CustTableCellTd>
                                    <div className='flex justify-start items-center'>
                                        <img src={row.customer.profile} alt={row.customer.name} width={30} height={30} className='rounded-full' />
                                        <span className='ml-2'>{row.customer.name}</span>
                                    </div>
                                </CustTableCellTd>
                                <CustTableCellTd align="center">{row.orderNo}</CustTableCellTd>
                                <CustTableCellTd align="center">${row.amount}</CustTableCellTd>
                                <CustTableCellTd>
                                    <div className={`inline-block px-3 py-1 rounded-3xl ${row.status === 'Delivered' ? 'text-[#089c72] bg-[#165346]' : 'text-[#b74d4f] bg-[#5f3238]'}`}>{row.status}</div>
                                </CustTableCellTd>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default RecentOrders
