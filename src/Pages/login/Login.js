import React from 'react'
import styles from './Login.module.css'
import { useState } from 'react'
import {useLogin} from '../../hooks/useLogin'
const Login = () => {
  const { login, pending, error } = useLogin();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(email, password)
    login(email, password)

  }

  return (
    <form onSubmit={handleSubmit} className={styles['login-form']}>
      <h2>Login</h2>
      <label>
        <span>email:</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>password:</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      {!pending && <button className="btn">Login</button>}
      {pending && <button className="btn" disabled>Loading</button>}
      {error && <p> {error}</p>}
    </form>
  )
}

export default Login
