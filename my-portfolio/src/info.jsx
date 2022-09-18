import React from 'react'
import imgPath from './img/293487244_3277032765913228_2764726702069771781_n.jpg'
import './css/info.css'

const Info = () => {
  const Info = [
    "Name: EarthStrix",
    "Age: 19",
    "Major: Computer Engineering",
    "Hobbies: Coding | surf the internet | learn a programming",
    "Location: Thailand"
  ]

  return (
    <div className='info-container'>
      <h1 className='header-name'>My Profile Card</h1>
      <section>
        <div className="info-image">
          <img src={imgPath} alt="" />
        </div>
        <div className="info-text">
          { Info.map((item) => (
            <p>
              {item}
            </p>
          ))}
        </div>
      </section>
      <div className="credit">
        <p>copyright &copy; EarthStrix</p>
      </div>
    </div>
  );
}

export default Info;