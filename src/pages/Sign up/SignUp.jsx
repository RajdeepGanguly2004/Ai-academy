import {React} from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaGoogle } from "react-icons/fa";
import { useFormik } from 'formik';
import { IoPeopleCircleSharp } from "react-icons/io5";

export default function SignUp() {

const formik = useFormik({
  initialValues: {
    username: '',
    email: '',
    password: '',
  },
  validate: (values) => {
    const errors = {};

    if (!values.username) {
      errors.username = 'Name is required';
    }

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
    <div className='b2'>
      <button type="submit" className="sign-up">
          <FaGoogle />
          Sign in google
      </button>
    </div>
    <div className="Full-part"> 
    <div className='icons-part'>
      <label htmlFor="username"><IoPeopleCircleSharp /></label>
      <input
        type="text"
        id="username"
        name="username"
        autoComplete="username"
        className="input-field"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.username}
        required
      />
      {formik.errors.username  && formik.touched.username && (
        <div className="error-message"><span style={{ color: 'red' }}>{formik.errors.username}</span></div>
      )}
    </div>
    <div className='icons-part'>
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
    
    <div className='icons-part'>
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

    <div className='Link-part'>
             <div className='b'>
             <div className='b1'>
            <input type="submit" className="sign-up" value="Sign Up" />
            </div>
            
            {/* <Link to='/otp-varification' /> */}
            </div>
            <div className='links'>
            <h5>Already have an account?<Link to='/Signin'>Sign In</Link></h5>
            <Link to='/Forgot-password'>forgot your pin?</Link>
             <Link to='/'>back</Link>
             </div>
             </div>
  </form>
);
};