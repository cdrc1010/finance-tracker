import React from 'react'
import styles from './Signup.module.css'
import { useState } from 'react'
import { useSignup} from '../../hooks/useSignup'

const Signup = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')

  const { signup, pending, error} = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(email, password, displayName)
    signup(email, password, displayName)
  }

  return (
    <form onSubmit={handleSubmit} className={styles['signup-form']}>
      <h2>Sign up</h2>
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
      <label>
        <span>display name:</span>
        <input
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>
      {!pending && <button className="btn">Sign up</button>}
      {pending && <button className='btn'disabled>loading</button>}
      {error && <p>{error}</p>}
    </form>
  )
}


export default Signup
