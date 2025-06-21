import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header>
        <nav className="navbar">
            <div className="logo">
                <h1>Phuc Nguyen</h1>
            </div>
            <ul className="nav-links">
                <li><a href="./index.html" className="active">Trang chủ</a></li>
                <li><a href="./introduction.html">Giới thiệu</a></li>
                <li><a href="./contact.html">Liên hệ</a></li>
                <li><a href="./history.html">Lịch sử đặt vé</a></li>
            </ul>
            <div className="auth-buttons">
                <a href="../common_view/login.html" className="login-btn">Đăng nhập</a>
                <a href="../common_view/signup.html" className="signup-btn">Đăng ký</a>
            </div>
        </nav>
    </header>
  )
}

export default Header