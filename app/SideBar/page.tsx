import React from 'react';
import style from 'Styles/sidebar.module.css';
import Image from 'next/image';
import sidebarData from './sidebarData.json'
function SidebarSmallSection({ smallSectionData }: any) {
    function SidebarItem({itemData}:any) {
        return (
            <div className={`flex items-center justify-left gap-x-4 p-2.5  rounded-lg mb-1`}>
                <Image src={itemData.icon} alt={''} width={17} height={17} />
                <p>{itemData.Heading}</p>
            </div>
        );
    }
    return (
        <div className=' p-4  border-b-2 border-gray-100 border-solid'>
            {
                smallSectionData.SideBarSectionHeading == "" ? '' : <p className='mb-2 ml-2'>{smallSectionData.SideBarSectionHeading}</p>
            }
            {
                smallSectionData.Items.map((itemData:any, index:number) => {
                    return (

                        <SidebarItem itemData={itemData}/>
                    )
                })
            }
        </div>
    );
}


function Sidebar() {
    return (
        <div className={`${style.sidebar} h-screen`}>
            {
                sidebarData.SidebarData.map((data, index) => {
                    return (
                        <SidebarSmallSection smallSectionData={data} />
                    );
                })
            }

        </div>
    );
}

export default Sidebar;