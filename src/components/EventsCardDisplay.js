import React from 'react'
import '../style/components/EventsCardDisplay.css'
import location from '../assets/icons/location.png'
import date from '../assets/icons/date.png'

const EventsCardDisplay = (props) => {
  return (
    <div className="card">
        <img className='img-card' src={props.img} alt="post" />
        <div className="container-detail">
          <div className="detail-card">
            <img src={location} alt="icons-location" />
            <p>{props.location}</p>
          </div>
          <div className="detail-card">
            <img src={date} alt="icons-date" />
            <p>{props.date}</p>
        </div>
        <p className='title'>{props.title}</p>
        <p className='subtitle'>{props.subtitle}</p>
        <div className="price">
          <p>Start From</p>
          <p className='idr'>{props.price}</p>
        </div>
        </div>
    </div>
  )
}

export default EventsCardDisplay
