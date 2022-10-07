import React from 'react'
import { useState, useEffect } from 'react'
import './css/about.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faUser } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  return (
    <div>
      <div className="about-info">
        <div className="quote-info">
          <h1 className="quote-info-headName">Quote</h1>
          <p className="quote-text">
            Have you ever think inspiration or Motivation will be able take you
            to the best future? <br />
            Maybe you should find something to do for discover that thing due
            for yourself
          </p>
        </div>
        <hr />
        <div className="experience-info">
          <h1 className="experience-info-headName">Experience</h1>
          <p className="experience-text">
            I am working about software development ,Programming <br />
            ,I have been learning about computer technology for 2 year ,but I
            feel myself not perfect
          </p>
        </div>
        <hr/>
        <div className="developer-info">
          <h1 className="developer-info-headName">About me</h1>
          <p className="developer-text">
            <span className="component-info">
              <FontAwesomeIcon icon={faUser} /> EarthStrix
            </span>
            <span className="component-info">
              <FontAwesomeIcon icon={faUser} /> Warapon Jitsook
            </span>
            <span className="component-info">
              <FontAwesomeIcon icon={faCode}/> Student | Programmer | Developer
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About