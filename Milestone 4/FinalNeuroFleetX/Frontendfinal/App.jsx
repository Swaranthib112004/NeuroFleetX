import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Shell from './components/Shell';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Vehicles from './pages/Vehicles';
import Booking from './pages/Booking';
import Maintenance from './pages/Maintenance';
import Settings from './pages/Settings';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import { getToken } from './services/auth';

function Private({children}){
  return getToken()?children:<Navigate to='/login' />;
}

export default function App(){
  return (
    <Shell>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/dashboard" element={<Private><Dashboard/></Private>} />
        <Route path="/vehicles" element={<Private><Vehicles/></Private>} />
        <Route path="/booking" element={<Private><Booking/></Private>} />
        <Route path="/maintenance" element={<Private><Maintenance/></Private>} />
        <Route path="/settings" element={<Private><Settings/></Private>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </Shell>
  );
}
