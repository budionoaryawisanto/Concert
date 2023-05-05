import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import '../style/pages/Events.css'
import api from '../models/api.js'
import search from '../assets/icons/search.png'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

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
    <div className='body'>
      <Navbar/>
      <div className="container-search">
        <form action="/search" className='form-search'>
            <div className='search-box'>
                <img src={search} alt="search" width='30px' height="30px" className='search-button'/>
                <input type="search" name="search" placeholder='Search here... ' id="search" />
            </div>
        </form>
      </div>
      <div className="container-item"></div>
      <Footer/>
    </div>
  )
}

export default Events
