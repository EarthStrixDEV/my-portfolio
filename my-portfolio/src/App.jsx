import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import Info from './Info'
import Social from './Social'
import Home from './Home'
import './css/navbar.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <div className="main-name">
            <p>EarthStrix</p>
          </div>
          <div className="link">
            <Link to="/">
              <FontAwesomeIcon icon={faHome} /> Home
            </Link>
            <Link to="/profile">
              <FontAwesomeIcon icon={faIdCard} /> Profile
            </Link>
            <Link to="/social">
              <FontAwesomeIcon icon={faGlobeAmericas} /> Contact
            </Link>
            <Link to="/about">
              <FontAwesomeIcon icon={faInfoCircle} /> About
            </Link>
          </div>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Info />} />
          <Route path="/social" element={<Social />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
