import '../style/pages/Login.css'
import React, { useState } from 'react'
import Terms from '../modals/Terms'
import FormLogin from '../components/FormLogin'
import FormRegister from '../components/FormRegister'

const Login = () => {
  const [registerActive, setRegisterActive] = useState(true)
  const [modalTerms, setModalTerms] = useState(false)
 
  return (
    <div className="body background-start">
        <div className="container-form">
            <p className='header-login'>KPoP</p>
            <p className='sub-header-login'>CONCERTS</p>
            <div className="container-optionalform">
                <div onClick={() => setRegisterActive(true)} className={`option-form ${registerActive ? "optionform-active" : ""}`}>Register</div>
                <div onClick={() => setRegisterActive(false)} className={`option-form ${registerActive ? "" : "optionform-active"}`}>Login</div>
            </div>
            {registerActive ? <FormRegister  setModalTerms={setModalTerms} setRegisterActive={setRegisterActive}/> : <FormLogin setModalTerms={setModalTerms} setRegisterActive={setRegisterActive} />}
          </div>
          {modalTerms ? <Terms modalTerms={setModalTerms} /> : ''}
    </div>
  )
}

export default Login
