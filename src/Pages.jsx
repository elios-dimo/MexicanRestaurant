import React from 'react';
import { useLocation, Route, Routes } from 'react-router-dom';
import { Appetizers } from './components/Menu_Categories/Appetizers';
import { Dishes } from './components/Menu_Categories/Dishes';
import { Beverages } from './components/Menu_Categories/Beverages';
import { AnimatePages } from './AnimatePages';
import App from './App.jsx';

export const Pages = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePages>
        <Routes key={location.pathname} location={location}>
          <Route path='/MexicanRestaurant' element={<App />} />
          <Route path='/Appetizers' element={<Appetizers />} />
          <Route path='/Dishes' element={<Dishes />} />
          <Route path='/Beverages' element={<Beverages />} />
        </Routes>
      </AnimatePages>
    </>
  );
};

export default Pages;
