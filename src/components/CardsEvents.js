import React from 'react'
import '../style/components/CardEvents.css'
import api from '../models/api'
import { FormatRupiah } from "@arismun/format-rupiah";

const CardsEvents = (props) => {
    const date = new Date(props.date)
  return (
    <div className='wrapper-card-events' key={props.index}>
      <img src={api.server + '/' + props.img} alt="img card" className='img-cards-events' />
      <div className="wrapper-detail-eventsCard">
        <p className='title'>{props.title}</p>
        <p className='location'>{props.location}</p>
        <p className='date'>{date.toDateString()}</p>
        <p className='price-events-cards'><FormatRupiah value={props.price}/></p>
      </div>
    </div>
  )
}

export default CardsEvents
