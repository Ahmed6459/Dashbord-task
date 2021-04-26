import React, { useState } from "react";
import { BsBellFill } from "react-icons/bs";

import Ellipse from "./Ellipse.png";
import "./Nav.css";
import Notification from "./notification";

const Nav = () => {
  const [isClicked, setIsClicked] = useState(false);
  console.log(isClicked);
  return (
      <>
    <nav className="navbar p-4">
      <div className="content ml-auto">
        <div
          className="notification"
          onClick={() => {
            setIsClicked(!isClicked);
          }}
        >
        {isClicked? <BsBellFill style={{ fontSize: "1.5rem", cursor: "pointer",color:"#1ec1c3" }} /> :
         <BsBellFill style={{ fontSize: "1.5rem", cursor: "pointer" }} />}
          <span></span>
        </div>
        <div className="about">
          <div className="image">
            <img src={Ellipse} alt="person" className="img-fluid" />
          </div>
          <div className="details">
            <h2>Anthony Mike</h2>
            <p>anthony2142@email.com</p>
            <i className="fa fa-angle-down fa-x"></i>
          </div>
        </div>
      </div>
    </nav>
    {isClicked&&       
    <Notification show={isClicked}/>}
    </>
  );
};

export default Nav;
