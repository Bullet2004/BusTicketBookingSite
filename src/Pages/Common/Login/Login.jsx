import React, { useState } from 'react'
import logo from '../../../assets/logo.svg'
import styles from './Login.module.css'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const account = [
    {
      username: 'user',
      password: '123456',
      role: 'client'
    },
    {
      username: 'admin',
      password: '123456',
      role: 'admin'
    }
  ]

  const handleLogin = (e) => {
    e.preventDefault()

    const found = account.find(
      (acc) => acc.username === username && acc.password === password
    )

    if (found) {
      if (found.role === 'admin') {
        navigate('/admin')
      } else {
        navigate('/')
      }
    } else {
      setError('Tên đăng nhập hoặc mật khẩu không đúng')
    }
  }

  return (
    <div className={styles.main}>
      <div className={styles.loginContainer}>
        <div className={styles.loginHeader}>
          <img src={logo} alt="Phúc Nguyên Bus Logo" className={styles.loginLogo} />
          <div className={styles.loginHeaderContent}>
            <h2>Đăng nhập</h2>
            <p className={styles.loginSubtitle}>Chào mừng bạn đến với Phúc Nguyên Bus</p>
          </div>
        </div>

        <form className={styles.form} onSubmit={handleLogin}>
          <div className={styles.formGroup}>
            <div className={styles.inputGroup}>
              <i className={`fas fa-user ${styles.inputIcon}`}></i>
              <input
                type="text"
                placeholder="Tên đăng nhập"
                className={styles.formControl}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <div className={styles.inputGroup}>
              <i className={`fas fa-lock ${styles.inputIcon}`}></i>
              <input
                type="password"
                placeholder="Mật khẩu"
                className={styles.formControl}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}

          <button type="submit" className={styles.formSubmit}>
            <i className="fas fa-sign-in-alt"></i>
            Đăng nhập
          </button>

          <div className={styles.registerLink}>
            Chưa có tài khoản? <Link to="/signup" className={styles.to}>Đăng ký ngay</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
