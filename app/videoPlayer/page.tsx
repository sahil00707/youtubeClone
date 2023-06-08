import React from 'react';
import VideoPlay from './videoPlay/page';
import VideoRecommendSection from './videoRecommendatinSection/page';
import Navbar from '../navbar/page';
import Commentsection from './commentSection/page';
function VideoPlayer() {
    return (
        <div>
            <Navbar />
            <div className='w-screen h-screen  flex '>
                <div className='w-3/4 h-screen px-10 py-5 ' >
                    <VideoPlay /> 
                </div>
                <VideoRecommendSection />
            </div>
        </div>
    );
}

export default VideoPlayer;