import React from 'react'
import '../style/components/EventsCardDisplay.css'

const EventsCardDisplay = (props) => {
  return (
    <div className="card">
        <img src={props.img} alt="image" />
          
    </div>
  )
}

export default EventsCardDisplay
