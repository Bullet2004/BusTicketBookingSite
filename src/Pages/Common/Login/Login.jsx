import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';import './Login.css'
import logo from '../../../assets/logo.svg'

const Login = () => {
  return (
      <div className="main">
        <div className="login-container">
            <div className="login-header">
                <img src={logo} alt="Phúc Nguyên Bus Logo" className="login-logo"/>
                <div className="login-header-content">
                    <h2>Đăng nhập</h2>
                    <p className="login-subtitle">Chào mừng bạn đến với Phúc Nguyên Bus</p>
                </div>
            </div>
            
            <form className="form" id="form-1">
                <div className="form-group">
                    <div className="input-group">
                        <i className="fas fa-user input-icon"></i>
                        <input id="username" name="username" rules="required" type="text" placeholder="Tên đăng nhập" className="form-control"/>
                    </div>
                    <span className="form-message"></span>
                </div>

                <div className="form-group">
                    <div className="input-group">
                        <i className="fas fa-lock input-icon"></i>
                        <input id="password" name="password" type="password" placeholder="Mật khẩu" className="form-control"/>
                        <i className="fas fa-eye-slash toggle-password"></i>
                    </div>
                    <span className="form-message"></span>
                </div>

                <div className="form-options">
                    <label className="remember-me">
                        <input type="checkbox" name="remember"/>
                        <span>Ghi nhớ đăng nhập</span>
                    </label>
                    <a href="#" className="forgot-password">Quên mật khẩu?</a>
                </div>

                <button type="submit" className="form-submit">
                    <i className="fas fa-sign-in-alt"></i>
                    Đăng nhập
                </button>

                <div className="register-link">
                    Chưa có tài khoản? <a href="/src/view/common_view/signup.html">Đăng ký ngay</a>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login