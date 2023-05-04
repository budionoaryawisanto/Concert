import React from 'react'
import '../style/components/Footer.css'
import cProfile from '../assets/images/kpopImg.png'
import ig from '../assets/icons/ig.png'
import twt from '../assets/icons/twt.png'
import fb from '../assets/icons/fb.png'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="container-item">
              <div className="profil">
                  <img src={cProfile} alt="company img" />
                  <p>KPoP Concert is a event discovery with on-demand ticket order services. Book your tickets now easily trough KPoP Concert!</p>
              </div>
              <div className="service">
                  <div className="about">About Us</div>
              </div>
              <div className="socmed">
                  <p>Follow Us</p>
                  <div className="container-icon">
                      <img src={ig} alt="ig" />
                      <img src={twt} alt="twt" />
                      <img src={fb} alt="fb" />
                  </div>
              </div>
        </div>
        <div className="copyright">© 2023 PT. KPoP Concert Network. All Rights Reserved</div>
    </footer>
  )
}

export default Footer
