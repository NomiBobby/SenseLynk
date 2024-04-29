import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navbar } from './components';
import { Gateway } from './pages';

import './App.css'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="flex min-h-screen w-full flex-col">
          <Navbar/>
          <div className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8'>
            <Routes>
              <Route path="/" element={<Gateway />} />
              <Route path="/status" element={<Gateway />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App