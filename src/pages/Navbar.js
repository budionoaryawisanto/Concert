import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../models/api'

const Navbar = () => {
  const navigate = useNavigate()
  
  const Logout = async (e) => {
    e.preventDefault()
   try {
     await axios.delete(api.logout)
     navigate('/')
   } catch (error) {
    
   }
  }

  return (
      <nav className="navbar is-light" role="navigation" aria-label="main navigation">
          <div className="container">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io" target='_blank' rel='noreferrer'>
          <img src="https://bulma.io/images/bulma-logo.png" alt='logo' width="112" height="28"/>
        </a>
    
        <button role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>
    
      <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <div className="buttons">
              <button className="navbar-item button is-light ">
            Home
              </button>
            </div>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <button className="button is-light" onClick={Logout}>
                Log Out
              </button>
            </div>
          </div>
        </div>
        </div>
    </nav>
  )
}

export default Navbar
