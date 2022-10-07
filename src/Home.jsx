import React from "react";
import { useState } from "react";
import "./css/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";
import htmlIcon from "./img/icons8-html-5-1280.png";
import cssIcon from "./img/icons8-css3-1280.png";
import javascriptIcon from "./img/icons8-javascript-1280.png";
import reactIcon from "./img/icons8-react-1280.png";
import cppIcon from "./img/icons8-c++-1280.png";
import csharpIcon from "./img/icons8-c-sharp-logo-1280.png";
import pythonIcon from "./img/icons8-python-1280.png";
import javaIcon from "./img/icons8-java-1280.png";

const Home = () => {
  const [toggleInfo, setToggleInfo] = useState(false);
  const handleToggleInfo = () => setToggleInfo(!toggleInfo);

  const programming_icon = [
    pythonIcon, javaIcon ,javascriptIcon, cppIcon, csharpIcon
  ];

  const webTech_icon = [
    htmlIcon, cssIcon, javascriptIcon, reactIcon
  ];

  return (
    <React.StrictMode>
      <div className="home-container">
        <div className="head-info">
          <div className="head-text">
            <h1>Hi,</h1>
            <h1>I'm EarthStrix</h1>
            <h1>Software Developer.</h1>
          </div>

          <div className="head-text-paragraph">
            <p>
              Inspiration Motivation take you to successful Future of Technology
              <br />
              Design the best things for the best things The world of Technology
              <br /> improvement and merge anything
            </p>
            <button
              className="toggle-text-paragraph"
              type="button"
              onClick={handleToggleInfo}
            >
              Show More <FontAwesomeIcon icon={faInfoCircle} />
            </button>
            {toggleInfo ? (
              <div className="head-text-paragraph">
                <p>
                  I like a Programming & Computer because programming make to
                  <br />
                  practice creative and critical thinking then you will be able
                  to create a <br />
                  impossible things to possible
                </p>
              </div>
            ) : (
              <p></p>
            )}
          </div>
        </div>
        <hr />
        <div className="technology-info-container">
          <h2>Programming Languages</h2>
          <div className="technology-info">
            {programming_icon.map((icon) => (
              <div className="technology-info-card">
                <img src={icon} alt="" />
              </div>
            ))}
          </div>
        </div>
        <hr />
        <div className="technology-info-container">
          <h2>Web Technology</h2>
          <div className="technology-info">
            {webTech_icon.map((icon) => (
              <div className="technology-info-card">
                <img src={icon} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </React.StrictMode>
  );
};

export default Home;
