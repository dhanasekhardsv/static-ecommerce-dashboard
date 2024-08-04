import React from 'react';
import Rating from './Rating';
import commentProfile from '../images/commentProfile.jpg';

const commentsData = [
    {
        profilePic: commentProfile,
        name: 'Jenny Wilson',
        rating: 4,
        commentDesc: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about the gluten allergies.'
    },
    {
        profilePic: commentProfile,
        name: 'Dianne Russell',
        rating: 5,
        commentDesc: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service'
    },
    {
        profilePic: commentProfile,
        name: 'Devon Lane',
        rating: 4,
        commentDesc: 'Normally wings are wings, but but theirs are lean meaty and tender and tastes so good.'
    },
    {
        profilePic: commentProfile,
        name: 'Dianne Russell',
        rating: 3,
        commentDesc: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service'
    },
]

const Feedback = () => {
    return (
        <div className='bg-[#202028] text-[#fdfdfd] p-1 rounded max-h-96 overflow-y-scroll'>
            <div className='p-2'>
                <h2 className='text-2xl font-bold'>Customer's Feedback</h2>
            </div>
            <div className='p-2 grow'>
                {
                    commentsData.map((comment, index) => {
                        return (
                            <div key={index} className='py-3 border-b border-[#434449] border-solid comment-container'>
                                <div className="flex justify-start items-center mb-2">
                                    <img src={comment.profilePic} alt="Profile" className='w-9 h-9 rounded-full' />
                                    <h3 className='text-lg ml-2'>{comment.name}</h3>
                                </div>
                                <div className='mb-2'>
                                    <Rating rating={comment.rating} />
                                </div>
                                <div>
                                    <p className='text-sm'>{comment.commentDesc}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Feedback
