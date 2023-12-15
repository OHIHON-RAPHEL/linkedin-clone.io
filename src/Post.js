import React from 'react'
import Avatar from '@mui/material/Avatar';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import InputOption from './InputOption'
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

const Post = ({ name, description, message, photoUrl }) => {

  return (
    <div className='bg-white p-[15px] mb-2.5 rounded-md'>
      <div className='flex mb-2.5'>
      <Avatar  />
        <div className='ml-2.5'>
            <h2>{name}</h2>
            <p className='text-xs text-gray-500'>{description}</p>
        </div>
      </div>

      <div clasName=''>
        <p cassName='text-base'>{message}</p>
      </div>

      <div className='flex justify-evenly'>
        <InputOption Icon={ThumbUpAltIcon} title="Like" color="gray"/>
        <InputOption Icon={ChatIcon} title="Comment" color="gray"/>
        <InputOption Icon={ShareIcon} title="Share" color="gray"/>
        <InputOption Icon={SendIcon} title="Send" color="gray"/>
      </div>
    </div>
  )
}

export default Post
