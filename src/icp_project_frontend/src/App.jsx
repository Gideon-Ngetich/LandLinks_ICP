import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
// import Signup from './pages/Signup';
import Views from './pages/Views'
import { initializeApp } from 'firebase/app';
import { config } from './config/config';
import AuthRoute from './components/AuthRoutes';
import UserPortal from './pages/UserPortal';
import SaleProperty from './pages/SaleProperty';
import Dashboard from './pages/Dashboard'
import Marketplace from './pages/Marketplace';
import Transctions from './pages/Transctions';

initializeApp(config.firebaseConfig);

const Application = () => {
  return (
      <Routes>
        <Route
          path="/"
          element={
            <AuthRoute>
              <HomePage />
            </AuthRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path='/signup' element={<Signup />} /> */}
        <Route path='/views' element={<Views />} />
        <Route path='/userportal' element={<UserPortal />} />
        <Route path='/saleproperty' element={<SaleProperty />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/marketplace' element={<Marketplace />} />
        <Route path='/transactions' element={<Transctions />} />
      </Routes>
  );
};

export default Application;