import React from 'react';
import Image from 'next/image';

function Comment() {
    return (
        <div className='flex my-5'>
            <div className='bg-pink-400 items-center justify-center flex rounded-3xl text-white text-xl font-semibold h-12 w-12'>f</div>
            <div className='py-0 px-4'>
                <p> <span className='font-semibold'>  Magnus Carlsen</span> <span className='text-gray-600 ml-3'>11 hours ago</span>  </p>
                <p className='my-2'>Magnus' face at the end lol, you can tell he enjoys beating Hikaru a bit more than others ahahah</p>
                <div className='flex items-center'>
                    <div className='flex items-center my-5'>
                        <Image src={'/sidebarIcons/like.png'} width={20} height={20} alt={''} />
                        <p className='text-sm mr-4 ml-1 text-gray-500'>234</p>
                        <Image className='rotate-180' src={'/sidebarIcons/like.png'} width={20} height={20} alt={''} />
                        <p className='font-semibold ml-10 text-sm'>Reply</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <Image  src={'/icons/down-arrow-comment.png'} width={15} height={15} alt={''} />
                   <p className='ml-2 text-blue-800 font-semibold'>18 replies</p>
                </div>
            </div>
        </div>
    );
}

function Commentsection() {
    return (
        <div >
            <div className='flex items-center gap-x-7 my-10'>
                <p>330 Comments</p>
                <div className='flex items-center'>
                    <Image src={'/icons/sort.png'} width={25} height={25} alt={''} />
                    <p className='mx-3'>Sort</p>
                </div>
            </div>
            <div className='flex items-center my-10'>
                <div className='bg-pink-400 items-center justify-center flex rounded-3xl text-white text-xl font-semibold h-12 w-12'>f</div>
                <input type="text" placeholder='Add a comment...' className='flex-grow ml-5 border-b border-gray-300 pb-1 outline-none' />
            </div>

            <div>
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </div>
        </div>
    );
}

export default Commentsection;