import React from 'react';
import Header from './Header'
import Sidebar from './Sidebar'
import Feed from './Feed'
import './App.css';

function App() {
  return (
    <div className='bg-zinc-200 '>
      <Header/>
      
      <div className='flex'>
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
