import React from 'react';
import style from 'styles/landingpage.module.css'
import Navbar from '../navbar/page';
import Sidebar from '../SideBar/page';
import AllVideos from '../AllVideos/page';

function Landingpage() {
    return (
        <div className={style.landingPage}>
            <Navbar/>
            <div className={`flex items-center`}>
            <Sidebar/>
            <AllVideos/>
            </div>
        </div>
    );
}

export default Landingpage;