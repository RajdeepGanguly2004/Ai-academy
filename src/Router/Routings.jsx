import * as React from 'react';
import SignIn from '../pages/Sign in/SignIn';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import ForgetPass from '../pages/ForgetPass/ForgetPass';
import ChangePass from '../pages/ChangePass/ChangePass';
import SignUp from '../pages/Sign up/SignUp';

const Routings = () => {
  return (
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/forgot-password" element={<ForgetPass />} />
          <Route path="/change-password" element={<ChangePass />} /> 
          <Route path="/signup" element={<SignUp />} />   
           
      </Routes>
  )
}

export default Routings;
