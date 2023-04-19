import React from 'react'
import Navbar from '../components/Navbar'
import '../style/pages/Home.css'

const Home = () => {
  return (
    <div className='body'>
      <Navbar addClass="d-none" />
      <div className="container-hero">
        <div className="hero">
          <div className="header-hero">The Best experience of <span>Concert</span> in 2023</div>
          <div className="context-hero">Want to watch a concert? It is very necessary for those who really like to be in a positive vibe that is crowded and fun to reverse the spirit of life. Whether it's watching idol concerts or performances from local artists who keep the atmosphere alive! Find various information related to the Concert Ticket Website only on KConcert.id</div>
          <div className="button-hero">Get Started</div>
        </div>
      </div>
    </div>
  )
}

export default Home
