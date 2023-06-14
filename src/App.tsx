import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Otp from './components/Otp/Otp';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={< Login />} />
      <Route path='/signup' element={< Signup />} />
      <Route path='/otp' element={<Otp />} />
    </Routes>

  )
}

export default App