import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import { faFilm } from '@fortawesome/free-solid-svg-icons'
import imgPath from './img/293487244_3277032765913228_2764726702069771781_n.jpg'
import './css/info.css'

const Info = () => {
  const infoProfile = [
    "Name: EarthStrix",
    "Age: 19",
    "Major: Computer Engineering",
    "Hobbies: Coding | surf the internet | learn a programming",
    "Location: Thailand"
  ]

  const icon_aside = [
    {
      activities: "Coding",
      icon: faCode,
    },
    {
      activities: "Internet",
      icon: faGlobe,
    },
    {
      activities: "Music",
      icon: faMusic,
    },
    {
      activities: "Movie",
      icon: faFilm,
    },
  ];

  return (
    <div>
      <div className='info-container'>
        <h1 className='header-name'>My Profile Card</h1>
        <section>
          <div className="info-image">
            <img src={imgPath} alt="" />
          </div>
          <div className="info-text">
            { infoProfile.map((item) => (
              <p>
                {item}
              </p>
            ))}
          </div>
        </section>
        <aside>
          { icon_aside.map((item) => (
            <p>{item.activities} <FontAwesomeIcon icon={ item.icon } /></p>
          )) }
        </aside>
        <div className="credit">
          <p>copyright &copy; EarthStrix</p>
        </div>
      </div>
    </div>
  );
}

export default Info;