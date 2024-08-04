import React from 'react';
import StarIcon from '@mui/icons-material/Star';

const Rating = ({ rating }) => {
    const ratingArr = [1, 2, 3, 4, 5];
    return (
        <div>
            {
                ratingArr.map(item => (item <= rating) ? <StarIcon key={item} className='text-[#fcdc2d]' /> : <StarIcon key={item} className='text-[#dbdbda]' />)
            }
        </div>
    )
}

export default Rating
