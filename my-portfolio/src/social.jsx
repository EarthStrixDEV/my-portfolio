import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SocialIcon } from "react-social-icons";
import './css/social.css'

const Social = () => {
  const Social_info = [
    {
      social_link: "https://twitter.com/EarthWarapon1",
      social_name: "Twitter",
    },
    {
      social_link: "https://facebook.com/EarthX99/",
      social_name: "Facebook",
    },
    {
      social_link: "https://instagram.com/earthstrix_/",
      social_name: "Instagram",
    },
    {
      social_link: "https://github.com/EarthStrixDEV/",
      social_name: "Github",
    },
  ];
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
          { Social_info.map((data) => (
            <div className="social-card">
              <SocialIcon url={data.social_link} />
              <label for="">{data.social_name}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Social