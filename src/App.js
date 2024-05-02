import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navbar } from './components';
import { Gateway } from './pages';

const App = () => {
  return (
      <BrowserRouter>
        <div className="flex w-full flex-col h-screen lg:overflow-hidden overflow-auto">
          <Navbar/>
          <div className='flex grow flex-col gap-4 p-4 md:gap-8 md:p-8'>
            <Routes>
              <Route path="/" element={<Gateway />} />
              <Route path="/status" element={<Gateway />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
  )
}

export default App