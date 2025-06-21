import React from 'react'
import './Login.css'
import logo from '../../../assets/logo.svg'

const Login = () => {
  return (
      <div class="main">
        <div class="login-container">
            <div class="login-header">
                <img src={logo} alt="Phúc Nguyên Bus Logo" class="login-logo"/>
                <div class="login-header-content">
                    <h2>Đăng nhập</h2>
                    <p class="login-subtitle">Chào mừng bạn đến với Phúc Nguyên Bus</p>
                </div>
            </div>
            
            <form class="form" id="form-1">
                <div class="form-group">
                    <div class="input-group">
                        <i class="fas fa-user input-icon"></i>
                        <input id="username" name="username" rules="required" type="text" placeholder="Tên đăng nhập" class="form-control"/>
                    </div>
                    <span class="form-message"></span>
                </div>

                <div class="form-group">
                    <div class="input-group">
                        <i class="fas fa-lock input-icon"></i>
                        <input id="password" name="password" type="password" placeholder="Mật khẩu" class="form-control"/>
                        <i class="fas fa-eye-slash toggle-password"></i>
                    </div>
                    <span class="form-message"></span>
                </div>

                <div class="form-options">
                    <label class="remember-me">
                        <input type="checkbox" name="remember"/>
                        <span>Ghi nhớ đăng nhập</span>
                    </label>
                    <a href="#" class="forgot-password">Quên mật khẩu?</a>
                </div>

                <button type="submit" class="form-submit">
                    <i class="fas fa-sign-in-alt"></i>
                    Đăng nhập
                </button>

                <div class="register-link">
                    Chưa có tài khoản? <a href="/src/view/common_view/signup.html">Đăng ký ngay</a>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login