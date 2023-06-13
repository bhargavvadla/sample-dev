
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/signup/Signup';
import Reset from './components/Resetp/Reset';
import Forgot from './components/Forgot/Forgot';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={< Login />} />
      <Route path='/signup' element={< Signup />} />
      <Route path='/reset' element={< Reset />} />
      <Route path='/forgot' element={< Forgot />} />
    </Routes>

  )

}

export default App ;