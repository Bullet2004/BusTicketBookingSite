import React from 'react'
import './Loginv1.css'

const Loginv1 = () => {
  return (
    <div className="login-container">
        <h2 className="login-title">Login</h2>
        <form className="login-form">
            <div className="input-group">
            <FaUser className="input-icon" />
            <input type="text" placeholder="Username" required />
            </div>
            <div className="input-group">
            <FaLock className="input-icon" />
            <input type="password" placeholder="Password" required />
            </div>
            <button type="submit" className="login-button">Login</button>
        </form>
        </div>
      )
}

export default Loginv1