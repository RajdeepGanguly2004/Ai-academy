import {React} from 'react';
import { Link } from 'react-router-dom';
import './ForgetPass.css';
import { MdOutlineMail } from "react-icons/md";
import { useFormik } from 'formik';

export default function ForgetPass(){
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validate: (values) => {
      const errors = {};
  
      if (!values.email) {
        errors.email = 'Email is required';
      }

     else if (!values.email.includes('@')) {
        errors.email = 'You not entered @ in your email. ';
      }

      else{
        setTimeout(() => {
        window.location.href = '/change-password'; 
      }, 10000);
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
    <h3>Forgot Password</h3>
    <div className="Page"> 
    <div className='icons'>
      <label htmlFor="email"><MdOutlineMail/></label>
      <input
        type="email"
        id="email"
        name="email"
        // autoComplete="email"
        className="field"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        required
      />
      {formik.errors.email && formik.touched.email && (
        <div className="error-message"><span style={{ color: 'red' }}>{formik.errors.email}</span></div>
      )}
    </div>
    </div>
    <div className='Submit-button'>
          <div className='button'>
             <div className='button1'>
              {/* <Link to='/Change-password'> */}
             <button type="submit" className="submit">
              Submit
              </button>
              {/* </Link> */}
              </div>
              <div className='button2'>
                <Link to='/signin'>
              <button type="submit" className="submit">
                Cancel
              </button>
              </Link>
              </div>
              </div>
               <div className='Link-part'>
                <Link to='/'>back</Link>
              </div>
              </div>
              </form>
);
};