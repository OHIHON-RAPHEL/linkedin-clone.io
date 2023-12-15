import React from 'react'
import Avatar from '@mui/material/Avatar';
import BG from './images/bg.jpeg'

const RecentItem = ({topic}) => {
 return ( <div className='flex text-[13px] text-gray-500 font-bold mb-[5px] p-[5px] cursor-pointer hover:bg-gray-300 hover:rounded-md hover:text-black'>
    <span className='mr-2.5 ml-[5px]'>#</span>
    <p>{topic}</p>
  </div>)
};


const Sidebar = () => {


  return (
    <div className='stricky top-20 flex-[0.2] rounded-md text-center h-fit'>
      <div className='flex flex-col items-center border-2 border-gray-300  bg-white pb-5'>
        <img src={BG} alt="" className='mb-[-20px] w-full h-[60px] rounded-md object-cover'/>
        <Avatar className='mb-5' />
        <h2 className='text-lg font-bold'>ddjjhdd</h2>
        <h4 classNAme='text-xs text-gray-500'>tubaskinoni@gmail.com</h4>
      </div>

      <div className='p-2.5 mb-2.5 border-2 border-gray-300 bg-white rounded-md'>
        <div className='flex mt-2.5 justify-between'>
          <p className='text-gray-500 text-sm font-semobold'>Who viewed you</p>
          <p className='font-bold text-blue-500'>2.543</p>
        </div>
        <div className='flex mt-2.5 justify-between'>
          <p className='text-gray-500 text-sm font-semobold'>Views on post</p>
          <p className='font-bold text-blue-500'>2.448</p>
        </div>
      </div>

      <div className='text-center p-2.5 border-2 border-gray-300 bg-white rounded-md mt-2.5'>
        <p>Recent</p>
        <RecentItem topic={"reactjs"}/>
        <RecentItem topic={"programming"}/>
        <RecentItem topic={"softwareengeering"}/>
        <RecentItem topic={"developer"}/>
      </div>
    </div>
  )
}

export default Sidebar
