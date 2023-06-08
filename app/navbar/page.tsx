import React from 'react';
import style from 'Styles/navbar.module.css';
import Image from 'next/image';
function Navbar() {
    return (
        <div className={`${style.navbar} flex justify-between items-center py-3 sticky z-10000`}>
            <div className={`${style.leftSide} flex items-center`}>
                <Image src={'/icons/menu.png'} alt={'menu'} width={20} height={20}></Image>
                <Image src={'/images/youtubeIcon.png'} alt={'menu'} quality={100} width={120} height={120}></Image>
            </div>
            <div className={`${style.middleSide}  flex items-center`}>
                <div className={`${style.searchBar} justify-between rounded-full`}>
                    <div className={`${style.searchBarInput} grow border-r`}>
                        <input type="text" placeholder='Search...' />
                    </div>
                    <div className={`${style.searchButton} h-full bg-gray-100 flex items-center`}>
                        <Image src={'/icons/search.png'} alt={'menu'} width={20} height={20}></Image>

                    </div>
                </div>
                <div className={`${style.voiceButton} bg-gray-100`}>
                    <Image src={'/icons/mic.png'} alt={'menu'} width={20} height={20}></Image>

                </div>
            </div>
            <div className={`${style.rightSide} flex items-center gap-x-6 pr-10`}>
                <div className={style.videoAdd}>
                    <Image src={'/icons/movie.png'} alt={'menu'} width={23} height={23}></Image>

                </div>
                <div className={`${style.bell} relative`}>
                    <Image src={'/icons/bell.png'} alt={'menu'} width={23} height={23}></Image>
                    <div className={`text-white bg-red-600 text-xs absolute -top-2 left-2 rounded-full p-0.5`}>9+</div>
                </div>
                <div className={style.profile}>
                    <Image src={'/icons/man (1).png'} alt={'menu'} width={35} height={35}></Image>

                </div>
            </div>

        </div>
    );
}

export default Navbar;