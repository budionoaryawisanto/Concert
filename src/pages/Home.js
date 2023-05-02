import React, { useState, useEffect } from 'react'
import '../style/pages/Home.css'
import Navbar from '../components/Navbar'
import axios from 'axios'
import api from '../models/api'
import rightArrow from '../assets/icons/Right.png'
import EventsCardDisplay from '../components/EventsCardDisplay.js'
import tds from '../assets/images/tds.png'
import bts from '../assets/images/bts.png'
import blackpink from '../assets/images/blackpink.png'

const Home = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    GetEvents()
  }, [])

  const GetEvents = async () => {
    try {
      const response = await axios.create().get(api.events)
      setEvents(response.data)
    } catch (error) {
    }
  }

  return (
    <div className='body'>
      <Navbar hideSearch="d-none" />
      <div className="container-hero">
        <div className="hero">
          <div className="header-hero">The Best experience of <span>Concert</span> in 2023</div>
          <div className="context-hero">Want to watch a concert? It is very necessary for those who really like to be in a positive vibe that is crowded and fun to reverse the spirit of life. Whether it's watching idol concerts or performances from local artists who keep the atmosphere alive! Find various information related to the Concert Ticket Website only on KConcert.id</div>
          <div className="button-hero">Get Started</div>
        </div>
      </div>
      <div className="container-events">
        <div className="container-header">
          <p className="header-events"><span>Explore</span> By Event</p>
          <img src={rightArrow} alt="arrow" />
        </div>
        <div className="container-card">
            <EventsCardDisplay img={tds} location='ICE BSD Tangerang' date='05 - 07 Mei 2023' title='TDS 2' subtitle='The Dream Show In Jakarta' price='IDR 1.200.000' />
            <EventsCardDisplay img={bts} location='ICE BSD Tangerang' date='24 - 25 September 2023' title='BE THE SUN' subtitle='World Tour Be The Sun Jakarta' price='IDR 1.200.000' />
            <EventsCardDisplay img={blackpink} location='Gelora Bung Karno Main Stadium' date='16 - 18 Juni 2023' title='BORN PINK' subtitle='Born Pink World Tour Jakarta' price='IDR 1.300.000' />
        </div>
      </div>
    </div>
  )
}

export default Home
