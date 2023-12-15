import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Logo from './images/linkedin.png'
import HeaderOption from './HeaderOption'
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = () => {
  return (
    <div className='flex justify-evenly border-b-4 gray-500 pt-2.5 pb-2.5 w-full sticky top-0 bg-white'>
      <div className='flex'>
         <img src={Logo} className='object-contain h-10 mr-5'/>
         <div className='p-2.5 flex items-center rounded text-gray-200 bg-slate-200'>
            <SearchIcon/>
            <input type="text" className='outline-none border-none '/>
         </div>
      </div>

      <div className='flex'>
        <HeaderOption Icon={HomeIcon} title="Home"/>
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
        <HeaderOption Icon={ChatIcon} title="Messaging"/>
        <HeaderOption Icon={NotificationsIcon} title="Notification"/>
        <HeaderOption avater="/images/linkedin.png" title="Me"/>
      </div>
    </div>
  )
}

export default Header

