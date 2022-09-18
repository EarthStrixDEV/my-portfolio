import React from 'react'
import imgPath from './img/293487244_3277032765913228_2764726702069771781_n.jpg'
import './css/info.css'

const info = () => {
  const Info = [
    "Name: EarthStrix",
    "Age: 19",
    "Major: Computer Engineering",
    "Hobbies: Coding | surf the internet | learn a programming",
    "Location: Thailand"
  ]

  return (
    <div className='info-container'>
      <h2 className='header-name'>EARTHSTRIX</h2>
      <div className="info-image">
        <img src={imgPath} alt="" />
      </div>
      <div className="info-text">
        { Info.map((item) => (
          <p>
            <strong>{item}</strong>
          </p>
        ))}
      </div>
      <div className="credit">
        <p>copyright &copy; EarthStrix</p>
      </div>
    </div>
  );
}

export default info;