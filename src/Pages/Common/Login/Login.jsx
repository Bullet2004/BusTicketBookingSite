import React from 'react'
import logo from '../../../assets/logo.svg'
import styles from './Login.module.css'
import { Link } from 'react-router-dom'

const Login = () => {
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

        <form className={styles.form} id="form-1">
          <div className={styles.formGroup}>
            <div className={styles.inputGroup}>
              <i className={`fas fa-user ${styles.inputIcon}`}></i>
              <input id="username" name="username" rules="required" type="text" placeholder="Tên đăng nhập" className={styles.formControl} />
            </div>
            <span className={styles.formMessage}></span>
          </div>

          <div className={styles.formGroup}>
            <div className={styles.inputGroup}>
              <i className={`fas fa-lock ${styles.inputIcon}`}></i>
              <input id="password" name="password" type="password" placeholder="Mật khẩu" className={styles.formControl} />
              <i className={`fas fa-eye-slash ${styles.togglePassword}`}></i>
            </div>
            <span className={styles.formMessage}></span>
          </div>

          <div className={styles.formOptions}>
            <label className={styles.rememberMe}>
              <input type="checkbox" name="remember" />
              <span>Ghi nhớ đăng nhập</span>
            </label>
            <a href="#" className={styles.forgotPassword}>Quên mật khẩu?</a>
          </div>

          <Link to="/" type="submit" className={styles.formSubmit}>
            <i className="fas fa-sign-in-alt"></i>
            Đăng nhập
          </Link>

          <div className={styles.registerLink}>
            Chưa có tài khoản? <Link to="/signup" className={styles.to}>Đăng ký ngay</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
