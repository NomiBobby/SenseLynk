import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Gateway } from './pages';

import { useStateContext } from './contexts/ContextProvider';
import './App.css'

const App = () => {
  const {activeMenu} = useStateContext();

  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">

          {activeMenu ? (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
              <Sidebar/>
            </div>
          ) : (
            <div className='w-0  dark:bg-secondary-dark-bg'>
              <Sidebar/>
            </div>
          )}

          <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
            <div className=' fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              <Navbar/>
            </div>

            <div>
              <Routes>
              
                {/* Dashboard */}
                <Route path="/" element={<Gateway />} />
                <Route path="/status" element={<Gateway />} />

              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App