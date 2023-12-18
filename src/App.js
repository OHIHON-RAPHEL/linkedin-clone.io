import React from 'react';
import Header from './Header'
import Sidebar from './Sidebar'
import Feed from './Feed'
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux'
import Login from './Login';
import './App.css';

function App() {
  const user = useSelector(selectUser);
  return (
    <div className='bg-zinc-200 '>
      <Header/>

      {!user ? (
        <Login/>
      ) : (
        <div className='flex'>
          <Sidebar />
          <Feed />
         </div>  
      )}
      
    </div>
  );
}

export default App;
