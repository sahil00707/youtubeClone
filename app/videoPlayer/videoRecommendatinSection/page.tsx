import React from 'react';
import { Tags, Tag } from '@/app/AllVideos/page';
import style from 'Styles/allvideo.module.css';
import Image from 'next/image';
import { convertLength } from '@/app/usefulFunctions';

function SmallVideoSection() {
    const videoLength = convertLength(Math.floor(Math.random() * 1000));
    return (
        <div className={`flex p-2 my-1 ${style.SmallVideoSection}`}>
            <div className="w-2/5 h-full relative">
                <Image src={'/images/random.png'} className='h-full object-fill rounded-xl' width={4000} height={4000} alt={''} />
                <div className={`bg-black text-white w-fit absolute right-1 bottom-1 px-2 py-1 rounded-lg text-xs`}>{videoLength}</div>

            </div>
            <div className='w-3/5 pl-2'>
                <h4 className='font-semibold text-sm'>Magnus Carlsen faces Hikaru Nakamura into the World championship final</h4>
                <p className='text-gray-500 text-xs my-0.5'>Magnus Carlsen</p>
                <div className='flex items-center gap-x-2 '>
                    <span className='text-lg text-gray-600'>87k views</span>
                    <div className='h-1 w-1 rounded-3xl bg-gray-600'></div>
                    <span className='text-xs text-gray-600'>2 hours ago </span>
                </div>
            </div>
        </div>
    );
}

function VideoRecommendSection() {
    return (


        <div className='py-3 px-2 gap-x-2 h-fit overflow-x-scroll'>
            <div className='mt-2 mb-7 overflow-x-scroll'>
                <Tags />
            </div>
            <div className='flex justify-center flex-col'>
                <SmallVideoSection />
                <SmallVideoSection />
                <SmallVideoSection />
                <SmallVideoSection />
                <SmallVideoSection />
                <SmallVideoSection />
                <SmallVideoSection />
                <SmallVideoSection />
                <SmallVideoSection />
                <SmallVideoSection />
                <SmallVideoSection />
                <SmallVideoSection />
                <SmallVideoSection />
                <SmallVideoSection />
                <SmallVideoSection />
                <SmallVideoSection />
                <SmallVideoSection />
                <SmallVideoSection />
                <SmallVideoSection />
            </div>
        </div>

    );
}

export default VideoRecommendSection;