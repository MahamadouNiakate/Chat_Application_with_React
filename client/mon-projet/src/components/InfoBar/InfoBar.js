import React from "react";

import closeIcon from "/Users/mahamadouniakate/Desktop/project/chatApplication/client/mon-projet/src/icons/closeIcon.png";
import onlineIcon from "/Users/mahamadouniakate/Desktop/project/chatApplication/client/mon-projet/src/icons/onlineIcon.png";

import "./InfoBar.css";

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div classname="leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online icon" />
      <h3>{room}</h3>
    </div>
    <div classname="rightInnerContainer">
      <a href="/">
        <img src={closeIcon} alt="close icon" />
      </a>
    </div>
  </div>
);

export default InfoBar;
