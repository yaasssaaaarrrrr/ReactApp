import React from "react";
import "./header.css";
import logo from "./images/image 1.svg";
import arrow from "./images/arrow.svg";
import arrowdesk from "./images/arrow-des.svg";
import profile from "./images/profile.svg";

export default function Header() {
  return (
    <div className="header">
      <div className="nav-bar clip-contents">
        <div className="hero-image clip-contents">
          <img src={logo} alt="Not Found" className="logo" />
          <div className="nav">
            <p className="my-assignment">My Assignment</p>
            <p className="chat-with-mentor">Chat with Mentor</p>
            <div className="profile-name">
              <img src={profile} alt="Not Found" className="account-circle" />
              <p className="profilename">ProfileName</p>
              <img
                src={arrowdesk}
                alt="Not Found"
                className="keyboard-arrow-down"
              />
              <img
                src={arrow}
                alt="Not Found"
                className="keyboard-arrow-down-mobile"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="referEn">
        <h1>UI/UX > Refer & Earn</h1>
      </div>
    </div>
  );
}
