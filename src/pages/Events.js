import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import '../style/pages/Events.css'
import api from '../models/api.js'
import search from '../assets/icons/search.png'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CardsEvents from '../components/CardsEvents'

const Events = () => {
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
    <div className='body bg-grey'>
      <Navbar/>
      <div className="container-search">
        <form action="/search" className='form-search'>
            <div className='search-box'>
                <img src={search} alt="search" width='30px' height="30px" className='search-button'/>
                <input type="search" name="search" placeholder='Search here... ' id="search" />
            </div>
        </form>
      </div>
      <div className="container-events-cards">
         {events.map((e, index) => {
           return <CardsEvents key={index} img={e.image} title={e.title} location={e.location} place={e.place} date={e.date} price={e.regularPrice}/>
        })}
      </div>
      <Footer/>
    </div>
  )
}

export default Events
