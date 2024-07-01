import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navbar } from './components';
import { Home } from './pages';

const App = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <div className='flex grow flex-col gap-4 p-4 md:gap-8 md:p-8'>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
    </BrowserRouter>
  )
}

export default App