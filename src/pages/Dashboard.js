import React, { useState, useEffect } from 'react'
import axios from 'axios'
import jwt_decode from "jwt-decode"
import { useNavigate } from 'react-router-dom'
import api from '../models/api'

const Dashboard = () => {
  const [name, setName] = useState('')
  const [token, setToken] = useState('')
  const [expireToken, setExpireToken] = useState('')
  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    refreshToken()
    getUsers()
  }, [])
  
  const refreshToken = async () => {
    try {
      const response = await axios.get(api.token)
      setToken(response.data.accessToken)
      const decodedToken = jwt_decode(response.data.accessToken)
      setName(decodedToken.name)
      setExpireToken(decodedToken.exp)
    } catch (error) {
      if (error.response) {
        navigate('/')
      }
    }
  }

  const axiosJWT = axios.create()

  axiosJWT.interceptors.request.use(async (config) => {
    const currentDate = new Date()
    if (expireToken * 1000 < currentDate.getTime()) {
      const response = await axios.get(api.token)
      config.headers.Authorization = `Bearer ${response.data.accessToken}`
      setToken(response.data.accessToken)
      const decodedToken = jwt_decode(response.data.accessToken)
      setName(decodedToken.name)
      setExpireToken(decodedToken.exp)
    }
    return config
  }, (error) => {
    return Promise.reject(error)
  })

  const getUsers = async () => {
    try {
      const response = await axiosJWT.get(api.users, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setUsers(response.data)
    } catch (error) {
    }
  }

  return (
    <div className='container mt-5'>
      <h1 className=''>Welcome Back: {name} </h1>
      <button className='button is-info' onClick={getUsers}>Get Users</button>
      <table className='table is-stripped is-fullwidth'>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <th>{index + 1}</th>
              <th>{user.name}</th>
              <th>{user.email}</th>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Dashboard
