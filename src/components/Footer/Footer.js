import React from "react";
import FooterLogo from "../../assets/images/logo1.png"
import "./Footer.css"

export const Footer = () => {
  return (
    <div className="footer-cont">

        <div className="footer-logo">
          <img
            src={FooterLogo}
            alt="logo"
           
          />    
        </div>
      <div className="footer-copyright">
        
          COPYRIGHT 2016. ALL RIGHTS RESERVED.
        
      </div>
    </div>
  );
};