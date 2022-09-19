import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SocialIcon } from "react-social-icons";
import './css/social.css'
import { useState } from 'react';

const Social = () => {
  return (
    <div className="contact-container">
      <div className="head-info">
        <h1 className="headName">Contact</h1>
      </div>
      <div className="email-info">
        <b>warapon.jitsook@gmail.com</b>
        <p>Portfolio Webpage</p>
      </div>
      <hr />
      <div className="social-info-container">
        <div className="social-info">
          <div className="social-card">
            <SocialIcon url="https://twitter.com" />
          </div>
          <div className="social-card">
            <SocialIcon url="https://facebook.com/EarthX99/" />
          </div>
          <div className="social-card">
            <SocialIcon url="https://instagram.com/earthstrix_/" />
          </div>
          <div className="social-card">
            <SocialIcon url="https://github.com/EarthStrixDEV" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Social