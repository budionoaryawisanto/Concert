import React from 'react'
import api from '../models/api'
import '../style/components/DetailCards.css'
import { useLocation } from 'react-router-dom'
import { FormatRupiah } from "@arismun/format-rupiah";
import Navbar from './Navbar'
import Footer from './Footer'

const DetailCards = () => {
    const location = useLocation()
    const data = location.state

  return (
    <div className='body'>
        <Navbar/>
        <img src={api.server + '/' + data.image} className='img-detail-cards' alt="hero" />
        <div className="container-detail-title">
            <p className='detail-card-title'>{data.title}</p>
            <p className='detail-card-location'>{data.location}</p>
        <p className='detail-card-price'><FormatRupiah value={data.regularPrice}/></p>
        </div>
        <Footer/>
    </div>
  )
}

export default DetailCards
