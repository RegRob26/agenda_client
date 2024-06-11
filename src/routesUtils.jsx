import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login/login.jsx';
import Signup from '@/components/signup/signup.jsx';

function RoutesComponent(props) {
  return (
    <div>
      <Routes>
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default RoutesComponent;