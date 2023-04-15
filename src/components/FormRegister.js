import '../style/pages/Login.css'
import React, { useState } from 'react'
import axios from 'axios'
import api from '../models/api'
import visibleIcon from '../assets/icons/visible.png'
import unvisibleIcon from '../assets/icons/unvisible.png'

const FormRegister = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')
    const [visible, setVisible] = useState(false)

    const Register = async (e) => {
        e.preventDefault()
        try {
            await axios.post(api.users, {
                name: name,
                email: email,
                password: password,
                confirmPassword: confirmPassword
            })
            props.setRegisterActive(false)
        } catch (error) {
            if (error.response) {
                setMessage(error.response.data.message)
            }
        }
    }

  return (
    <form action="" className='form' onSubmit={Register}>
        <div className="container-field">
             <p className='form-message'>{message}</p>
            <div className="field">
                <div className="controls">
                    <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
            </div>
            <div className="field">
                <div className="controls">
                    <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
            </div>
            <div className="field">
                <div className="controls">
                        <input type={visible ? 'text' : 'password'} className='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <img src={visible ? unvisibleIcon : visibleIcon} onClick={() => visible ? setVisible(false) : setVisible(true)} className='icon-form' alt="icon" />
                </div>
            </div>
            <div className="field">
                <div className="controls">
                        <input type={visible ? 'text' : 'password'} className='password' placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        <img src={visible ? unvisibleIcon : visibleIcon} onClick={() => visible ? setVisible(false) : setVisible(true)} className='icon-form' alt="icon" />
                </div>
            </div>
                 <div className="container-loginterms">
                      <button className='button-login' onClick={Register}>Regsiter</button>
                      <div className="container-terms">
                          <p className='terms'>By signing up, you accept our</p>
                           <span className='text-button' onClick={() => props.setModalTerms(true)}>Conditions</span>
                      </div>
                      <div className="container-terms">
                          <p className='terms'>Have an account?</p>
                          <span className='text-button' onClick={() => props.setRegisterActive(false)}>Login</span>
                      </div>
                  </div>
        </div>
    </form>
  )
}

export default FormRegister
