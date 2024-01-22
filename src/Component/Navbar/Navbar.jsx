import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import Sidebar from '../Sidebar/Sidebar';
import Sign_in from '../../pages/Sign in/SignIn';
const navbar = () => {
	return (
		<>
			<div className="navbar">
				<div className="nav">
					{/* <div className="nav_icon1" onClick={Slidebar}> */}
						<Sidebar/>
						{/* <FiAlignJustify size={25} color='#fff' /> */}
					{/* </div> */}
					<div className="nav_title">
						Ai Academy
						</div>
					<div className="sign-in-icon">
					<Link id="sign-in" className="sign-in" to="/signin">
          {/* <Sign_in/> */}
						<HiArrowRightOnRectangle size={25} color='#fff'/>
						</Link>
					</div>
					{/* <div className='sign_in' onClick={HiArrowRightOnRectangle}>
						<Sign_in/>
					</div> */}
				</div>
			</div>
		</>
	)
}
export default navbar