import React from 'react'
import '../style/components/Navbar.css'
import downArrow from '../assets/icons/arrow-down.png'

const Navbar = () => {
  return (
    <nav>
      <div className="wrapper-nav-button">
        <div className='nav-button'>HOME</div>
        <div className='nav-button event'>
            <p>EVENT</p>
            <img src={downArrow} alt="down" />
        </div>
        <div className='nav-button'>ACCOUNT</div>
        <div className="tickets-button">GET TICKETS</div>
      </div>
    </nav>
  )
}

export default Navbar
