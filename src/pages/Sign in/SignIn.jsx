import {React} from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaGoogle } from "react-icons/fa";
import { useFormik } from 'formik';

export default function Sign_in() {

const formik = useFormik({
  initialValues: {
    email: '',
    password: '',
  },
  validate: (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Email is required';
    }

   else if (!values.email.includes('@')) {
      errors.email = 'You not entered @ in your email. ';
    }

    if (!values.password) {
      errors.password = 'Password is required';
    }

    return errors;
  },
  onSubmit: (values) => {
    console.log(values);
  },
});

return (
  <form onSubmit={formik.handleSubmit}>
    <Link to="https://ibb.co/r6WWFMn"><img src="https://i.ibb.co/J7hhm2X/IMG-20231223-010918.jpg" alt="IMG-20231223-010918" border="0" /></Link>
    <h3>Welcome back</h3>
    <div className="Full-page"> 
    <div className='icon'>
      <label htmlFor="email"><MdOutlineMail/></label>
      <input
        type="email"
        id="email"
        name="email"
        autoComplete="email"
        className="input-field"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        required
      />
      {formik.errors.email  && formik.touched.email && (
        <div className="error-message"><span style={{ color: 'red' }}>{formik.errors.email}</span></div>
      )}
    </div>
    </div>
    
    <div className='icon'>
      <label htmlFor="password"><RiLockPasswordLine /></label>
      <input
        type="password"
        id="password"
        name="password"
        autoComplete="password"
        className="input-field"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        required
      />
      {formik.errors.password && formik.touched.password && (
        <div className="error-message"><span style={{ color: 'red' }}>{formik.errors.password}</span></div>
      )}
    </div>

    <div className='pass'>
             <div className='btn'>
             <div className='btn1'>
            <input type="submit" className="sign-in" value="Sign in" />
            </div>
            <div className='btn2'>
            <button type="submit" className="sign-in">
                <FaGoogle />
                Sign in google
            </button>
            </div>
            <Link to='/otp-varification' />
            </div>
            <div className='links'>
            <h5>Don't have an account?<Link to='/signup'>Sign Up</Link></h5>
            <Link to='/forgot-password'>forgot your pin?</Link>
             <Link to='/'>back</Link>
             </div>
             </div>
  </form>
);
};