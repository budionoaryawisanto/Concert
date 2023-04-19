import React from 'react'
import '../style/components/Navbar.css'
import accountButton from '../assets/icons/Fill 1.png'
import kpopImg from '../assets/images/kpopImg.png'
import search from '../assets/icons/search.png'
import { useState } from 'react'

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }

  return (
    <nav>
      <div className="wrapper-search">
        <img src={kpopImg} alt="img" className='img-navbar' />
        <form action="/search" className='form-search'>
            <div className={`search-box ${props.addClass}`}>
                <img src={search} alt="search" width='30px' height="30px" className='search-button'/>
                <input type="search" name="search" placeholder='Search here... ' id="search" />
            </div>
        </form>
      </div>
      <div className={`wrapper-nav-button ${isOpen ? "d-none" : ""}`}>
        <div className='nav-button'>Home</div>
        <div className='nav-button event'>Event</div>
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
