import React from 'react'
import styles from './ClientNavbar.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <h1>Phuc Nguyen</h1>
        </div>
        <ul className={styles.navLinks}>
          <li>
            <NavLink to="/" className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}>Trang chủ</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}>Giới thiệu</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}>Liên hệ</NavLink>
          </li>
          <li>
            <NavLink to="/history" className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}>Lịch sử đặt vé</NavLink>
          </li>
        </ul>
        <div className={styles.authButtons}>
          <NavLink to="/login" className={styles.loginBtn}>Đăng nhập</NavLink>
          <NavLink to="/signup" className={styles.signupBtn}>Đăng ký</NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Header
