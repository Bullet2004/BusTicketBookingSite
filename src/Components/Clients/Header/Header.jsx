import React from 'react'
import styles from './ClientNavbar.module.css';

const Header = () => {
  return (
    <header>
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <h1>Phuc Nguyen</h1>
            </div>
            <ul className={styles.navLinks}>
                <li><a href="./index.html" className={styles.active}>Trang chủ</a></li>
                <li><a href="./introduction.html">Giới thiệu</a></li>
                <li><a href="./contact.html">Liên hệ</a></li>
                <li><a href="./history.html">Lịch sử đặt vé</a></li>
            </ul>
            <div className={styles.authButtons}>
                <a href="../common_view/login.html" className={styles.loginBtn}>Đăng nhập</a>
                <a href="../common_view/signup.html" className={styles.signupBtn}>Đăng ký</a>
            </div>
        </nav>
    </header>
  )
}

export default Header
