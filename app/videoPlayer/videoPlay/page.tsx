import React from 'react';
import Image from 'next/image';
import style from 'styles/videoplay.module.css'
import Commentsection from '../commentSection/page';

function VideoPlay() {
    return (
        <div className={`w-full h-full ${style.videoplay}`}>
            <div className='w-full h-full'>
                <Image src={'/images/random.png'} width={1000} height={1000} className='w-full h-full' alt={''} />
            </div>
            <div className='my-2'>
                <h3 className='font-semibold text-lg'>Magnus SACRIFICES 25 SECONDS on Move 1 vs Hikaru in a BLITZ Game | 2023 Norway Chess Blitz</h3>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                    <div >
                        <Image src={'/icons/man.png'} width={50} height={50} alt={''} />
                    </div>
                    <div className='ml-3 mr-8'>
                        <h4 className='font-semibold'>Magnus Carlsen</h4>
                        <p className='text-gray-500'>234k subscriber</p>
                    </div>
                    <div>
                        <button className='py-2 px-8 bg-black text-white rounded-3xl'>Subscribe</button>
                    </div>
                </div>
                <div className='flex gap-x-3'>
                    <div className='flex bg-gray-300 py-3  rounded-3xl'>
                        <div className='border-r border-gray-400 px-4 flex items-center'>
                            <Image src={'/sidebarIcons/like.png'} width={15} height={15} alt={''} />
                            <p className='ml-2  text-sm'>2.7k</p>
                        </div>
                        <div className='rotate-180 px-4'>
                            <Image src={'/sidebarIcons/like.png'} width={15} height={15} alt={''} />
                        </div>
                    </div>
                    <div className='flex items-center bg-gray-300 py-3  rounded-3xl px-4'>
                        <Image src={'/icons/share.png'} width={15} height={15} alt={''} />
                        <p className='ml-2  text-sm'>Share</p>
                    </div>
                    <div className='flex items-center bg-gray-300 py-3  rounded-3xl px-4'>
                        <Image src={'/icons/scissors.png'} width={15} height={15} alt={''} />
                        <p className='ml-2 text-sm'>Clip</p>
                    </div>
                    <div className='flex items-center bg-gray-300 py-3  rounded-3xl px-4'>
                        <Image src={'/icons/more.png'} width={15} height={15} alt={''} />
                    </div>
                </div>
            </div>
            <div className='w-full h-fit py-3 px-4 my-4 bg-gray-300 rounded-xl'>
                <p className='font-semibold'>275k views 11 hours ago</p>
                <p> Magnus Carlsen faces Hikaru Nakamura in the 2023 Norway Chess Blitz Tournament.</p>
            </div>
            <Commentsection />  
        </div>
    );
}

export default VideoPlay;