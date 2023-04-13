import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import api from '../models/api'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')
    const navigate = useNavigate()

    const Register = async (e) => {
        e.preventDefault()
        try {
            await axios.post(api.users, {
                name: name,
                email: email,
                password: password,
                confirmPassword: confirmPassword
            })
            navigate("/")
        } catch (error) {
            if (error.response) {
                setMessage(error.response.data.message)
            }
        }
    }

  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
            <div className="columns is-centered">
                      <div className="column is-4-dekstop">
                          <form action="" className='box is-half' onSubmit={Register}>
                               <p className='has-text-centered is-red'>{message}</p>
                              <div className="field">
                                  <label className='label'>Name</label>
                                  <div className="controls">
                                      <input type="text" className='input' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                                  </div>
                              </div>
                              <div className="field">
                                  <label className='label'>Email</label>
                                  <div className="controls">
                                      <input type="text" className='input' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                  </div>
                              </div>
                              <div className="field">
                                  <label className='label'>Password</label>
                                  <div className="controls">
                                      <input type="password" className='input' placeholder='*******' value={password} onChange={(e) => setPassword(e.target.value)} />
                                  </div>
                              </div>
                              <div className="field">
                                  <label className='label'>Confirm Password</label>
                                  <div className="controls">
                                      <input type="password" className='input' placeholder='*******' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                                  </div>
                              </div>
                              <div className="field">
                                 <button className='button is-success is-fullwidth' onClick={Register}>Register</button>
                              </div>
                          </form>
                </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register
