import React from "react";
import { BrowserRouter ,Route ,Routes ,Link } from "react-router-dom";
import Info from './info'
import Social from './social'
import './css/navbar.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <div className="main-name">
            <h5>My Portfolio</h5>
          </div>
          <div className="link">
            <Link to="/">Home</Link>
            <Link to="/social">Social</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Info/>}/>
          <Route path="/" element={<Social/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
