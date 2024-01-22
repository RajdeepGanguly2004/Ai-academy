import {React} from 'react';
import { Link } from 'react-router-dom';
import './ChangePass.css';
import { useFormik } from 'formik';
import { RiLockPasswordLine } from "react-icons/ri";
import { TbPasswordFingerprint } from "react-icons/tb";

export default function ChangePass(){
  const formik = useFormik({
    initialValues: {
      password: '',
      RePassword: '',
      VarifyCode: '',
    },
    validate: (values) => {
      const errors = {};
  
      if (!values.password) {
        errors.password = 'Password is required';
      }
  
      if (!values.RePassword) {
        errors.RePassword = 'Re-enter your password! its required';
      }

      if (!values.VarifyCode) {
        errors.VarifyCode = 'Varification code is required. ';
      }
      
      //  if (!values.VarifyCode.includes('0-9')) {
      //   errors.VarifyCode = 'Only numbers are allowed ';
      // }
  
      return errors;
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Link to="https://ibb.co/r6WWFMn"><img src="https://i.ibb.co/J7hhm2X/IMG-20231223-010918.jpg" alt="IMG-20231223-010918" border="0" /></Link>
      <h3>Change Password</h3>
      <div className="Pass-page"> 
      <div className="Pass">
      <label htmlFor="password"><RiLockPasswordLine /></label>
      <input
        type="password"
        id="password"
        name="password"
        className="field"
        placeholder='Enter your new Password'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        required
      />
      {formik.errors.password && formik.touched.password && (
        <div className="error-message"><span style={{ color: 'red' }}>{formik.errors.password}</span></div>
      )}
    </div> 
    <div className="Pass">
    <label htmlFor="password"><RiLockPasswordLine /></label>
      <input
        type="password"
        id="RePassword"
        name="RePassword"
        className="field"
        placeholder='Enter your new Password'
        autoComplete="RePassword"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.RePassword}
        required
      />
      {formik.errors.RePassword && formik.touched.RePassword && (
        <div className="error-message"><span style={{ color: 'red' }}>{formik.errors.RePassword}</span></div>
      )}
    </div>
    <div className="Pass">
    <label htmlFor="password"><TbPasswordFingerprint /></label>
      <input
        type="password"
        id="VarifyCode"
        name="VarifyCode"
        className="field"
        placeholder='Enter your varification code'
        autoComplete="VarifyCode"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.VarifyCode}
        required
      />
      {formik.errors.VarifyCode && formik.touched.VarifyCode && (
        <div className="error-message"><span style={{ color: 'red' }}>{formik.errors.VarifyCode}</span></div>
      )}
    </div>
    </div>
    <div className='Submit-pass'>
          <div className='button'>
             <div className='button1'>
             <button type="submit" className="submit">
              Submit
              </button>
              </div>
              <div className='button2'>
                <Link to='/forgot-password'>
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