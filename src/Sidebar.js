import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

const Sidebar = () => {
    return (
        <div className="sidebar">
        <SidebarRow src="https://www.instagram.com/p/CSn3YYMIW549Gn2cI2gsHFDllhNqxKswiczMmw0/" title="Sarthak Kakade"/>
        <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 informative centre"/>
        <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
        <SidebarRow Icon={PeopleIcon} title="Friends"/>
        <SidebarRow Icon={ChatIcon} title="Messenger"/>
        <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
        <SidebarRow Icon={VideoLibraryIcon} title="Vidios"/>
        <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Marketplace"/>
            
        </div>
    )
}

export default Sidebar
