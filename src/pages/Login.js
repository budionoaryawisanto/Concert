import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import api from '../models/api'
import visibleIcon from '../assets/icons/visible.png'
import unvisibleIcon from '../assets/icons/unvisible.png'
import Terms from '../modals/Terms'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [visible, setVisible] = useState(false)
  const [registerActive, setRegisterActive] = useState(true)
  const navigate = useNavigate()

    const Auth = async (e) => {
        e.preventDefault()
        try {
            await axios.post(api.login, {
                email: email,
                password: password
            })
            navigate("/dashboard")
        } catch (error) {
            if (error.response) {
                setMessage(error.response.data.message)
            }
        }
    }

  return (
    <div className="body background-start">
        <div className="container-form">
        <form action="" className='form' onSubmit={Auth}>
            <p className='header-login'>KPoP</p>
            <p className='sub-header-login'>CONCERTS</p>
            <div className="container-optionalform">
                <div onClick={() => setRegisterActive(true)} className={`option-form ${registerActive ? "optionform-active" : ""}`}>Register</div>
                <div onClick={() => setRegisterActive(false)} className={`option-form ${registerActive ? "" : "optionform-active"}`}>Login</div>
            </div>
          <div className="container-field">
             <p className='form-message'>{message}</p>
                  <div className="field">
                      <div className="controls">
                          <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                      </div>
                  </div>
                  <div className="field">
                      <div className="controls">
                              <input type={visible ? 'password' : 'text'} className='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                              <img src={visible ? visibleIcon : unvisibleIcon} onClick={() => visible ? setVisible(false) : setVisible(true)} className='icon-form' alt="icon" />
                      </div>
                  </div>
                  </div>
                  <div className="container-loginterms">
                      <button className='button-login' onClick={Auth}>Sign In</button>
                      <div className="container-terms">
                          <p className='terms'>By signing up, you accept our</p>
                           <span className='text-button'>Conditions</span>
                      </div>
                      <div className="container-terms">
                          <p className='terms'>Have an account?</p>
                          <span className='text-button'>Login</span>
                      </div>
                  </div>
              </form>
          </div>
          <Terms/>
    </div>
  )
}

export default Login
