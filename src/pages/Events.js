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
    const [records, setRecords] = useState([])

    useEffect(() => {
      GetEvents()
    }, [])

    const GetEvents = async () => {
        try {
            const response = await axios.create().get(api.events)
            setEvents(response.data)
            setRecords(response.data)
        } catch (error) {
        }
  }

    const Search = (event) => {
      setRecords(events.filter(e => e.title.toLowerCase().includes(event.target.value)))
    }

  return (
    <div className='body bg-grey'>
      <Navbar/>
      <div className="container-search">
        <div className='form-search'>
            <div className='search-box'>
                <img src={search} alt="search" width='30px' height="30px" className='search-button'/>
                <input onChange={Search} placeholder='Search here... ' id="search" />
            </div>
        </div>
      </div>
      <div className="container-events-cards">
         {records.map((e, index) => {
           return <CardsEvents data={e} key={index} img={e.image} title={e.title} location={e.location} place={e.place} date={e.date} price={e.regularPrice}/>
        })}
      </div>
      <Footer/>
    </div>
  )
}

export default Events
