import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { slide as Menu } from "react-burger-menu";
import { IoDocumentOutline } from "react-icons/io5";
import { GrCertificate } from "react-icons/gr";
import { BiBook, BiFontSize } from "react-icons/bi";
import { CiYoutube } from "react-icons/ci";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaWpforms } from "react-icons/fa";
const Sidebar = () => {
  return (
    <>
      <Menu>
        <div className="Chat" style={{display: "flex"}}>
          <span className='new-chat-button'>   
          <button className="new-chat" onClick={Sidebar}>
            <span style={{fontSize: "medium"}}>+ New Chat</span>
            </button>
          </span> 
        </div>
        <div className="full-list" style={{display: "flex"}}>
        <Link id="tutorial" className="menu-item" to="/Tutorial(ServiceNow)">
          <h3> <IoDocumentOutline/> <span>Tutorial(ServiceNow)</span> </h3>
        </Link>
        <Link id="Certification" className="menu-item" to="/Certification">
          <h3> <GrCertificate /> <span>Certification</span> </h3>
        </Link>
        <Link id="Use_cases" className="menu-item" to="/Use_cases">
          <h3> <BiBook /> <span>Use cases</span> </h3>
        </Link>
        <Link id="Youtube" className="menu-item" to="/Youtube">
          <h3> <CiYoutube /> <span>Youtube</span> </h3>
        </Link>
        <Link id="Chat" className="menu-item" to="/Chat">
          <h3> <IoChatbubbleEllipsesOutline /> <span>Chat</span> </h3>
        </Link>
        <Link id="Intake_Form" className="menu-item" to="/Intake_Form">
          <h3> <FaWpforms /> <span>Intake Form</span> </h3>
        </Link>
        </div>
      </Menu>
    </>
  )
}

export default Sidebar;