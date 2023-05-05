import React from 'react'
import '../style/components/Navbar.css'
import accountButton from '../assets/icons/Fill 1.png'
import kpopImg from '../assets/images/kpopImg.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }
  const navigate = useNavigate()

  return (
    <nav>
      <div className="wrapper-search">
        <img src={kpopImg} alt="img" className='img-navbar' />
      </div>
      <div className={`wrapper-nav-button ${isOpen ? "d-none" : ""}`}>
        <div className='nav-button' onClick={() => navigate('/')} >Home</div>
        <div className='nav-button event' onClick={() => navigate('/events')} >Event</div>
        <div className='nav-button'>About Us</div>
        <img src={accountButton} alt="Account" className='nav-button account'/>
      </div>
      <div className="toggle-button" onClick={toggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  )
}

export default Navbar
