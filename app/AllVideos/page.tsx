'use client';
import React from 'react';
import style from 'Styles/allvideo.module.css';
import Image from 'next/image';
import allTags from './tags.json';
import { convertLength, convertUploadedTime, convertViews } from '../usefulFunctions';
import allVideos from './allVideosData.json';
import Router from 'next/router'  
import Link from 'next/link';

let currentTagIndex = 0;
function Tag({ tagdata }: any) {
    function changeTagIndex(index: number) {
        currentTagIndex = index;
        alert(currentTagIndex);  
    }
    let tagStyle = {
        "background-color": 'black',
        "color": 'white'
    }
    return (
        <div className={`text-sm rounded-lg px-5  py-1 bg-gray-100 text-black capitalize ${(currentTagIndex==tagdata.index)?'bg-black':'bg-black'}`} onClick={()=>changeTagIndex(tagdata.index)}>{tagdata.tag}</div>
    );
}

function Tags() {
    return (
        <div className={`flex gap-x-2 overflow-x-scroll`}>
            {
                allTags.tagsList.map((tag, index) => {
                    return (

                        <Tag tagdata={tag} />
                    );
                })
            }
        </div>
    );
}

function Video({ videoData }: any) {
    const views = convertViews(Math.floor(Math.random() * 100000000));
    const videoLength = convertLength(Math.floor(Math.random() * 1000));
    const uploadedTime = convertUploadedTime(Math.floor(Math.random() * 100000000));
    return (
        <Link href={'/videoPlayer'}>
        <div className={`${style.video}`} >
            <div className={`${style.thumbnail} w-full relative`}>
                <Image className='w-full h-full object-fill rounded-xl' src={'/' + videoData.videoThumbnail} quality={100} width={2000} height={2000} alt={''} />
                <div className={`bg-black text-white w-fit absolute right-2 bottom-2 px-2 py-1  rounded-lg text-xs`}>{videoLength}</div>
            </div>
            <div className={`${style.videoInfo} flex pt-2`}>
                <div className={`${style.videoProfilePic}`}>
                    <Image className={`${style.profoleImage}`} src={'/' + videoData.videoThumbnail} width={550} height={550} alt={''} />

                </div>
                <div className={`${style.videoData} p-3 pt-0`}>
                    <p className='font-semibold'>{videoData.videoTitle}</p>
                    <p className={`text-sm text-gray-500`}>{videoData.channelName} </p>
                    <div className={`${style.viewsDateUploaded} flex items-center `}>
                        <p className={`text-sm text-gray-500`}>{views} views</p>
                        <div className='h-1 w-1 rounded-3xl bg-gray-500 mx-1'></div>
                        <p className={`text-sm text-gray-500`}>{uploadedTime}</p>
                    </div>
                </div>
            </div>
        </div>
        </Link>
    );
}

function AllVideos() {
    return (
        <div className='h-screen w-screen p-5 overflow-y-scroll'>
            <Tags />
            <div className={`flex flex-wrap gap-x-20 gap-y-8 py-7`}>
                {
                    allVideos.allVidoes.map((videoData, index) => {
                        return (
                            <Video videoData={videoData} />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default AllVideos;
export {Tags,Tag};