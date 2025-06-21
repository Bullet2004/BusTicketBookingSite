import React from 'react'
import '../Login/Login.css'
import logo from '../../../assets/logo.svg'

const Signup = () => {
  return (
    <div class="main">
        <div class="login-container signup-container">
            <div class="login-header">
                <img src={logo} alt="Phúc Nguyên Bus Logo" class="login-logo"/>
                <div class="login-header-content">
                    <h2>Đăng ký tài khoản</h2>
                    <p class="login-subtitle">Tham gia cùng Phúc Nguyên Bus ngay hôm nay</p>
                </div>
            </div>
            
            <form action="" method="POST" class="form" id="form-1">
                <div class="form-group">
                    <div class="input-group">
                        <i class="fas fa-user input-icon"></i>
                        <input id="fullname" name="fullname" rules="required" type="text" placeholder="Họ và tên" class="form-control"/>
                    </div>
                    <span class="form-message"></span>
                </div>

                <div class="form-group">
                    <div class="input-group">
                        <i class="fas fa-phone input-icon"></i>
                        <input id="phone" name="phone" rules="required|min:10" type="text" placeholder="Số điện thoại" class="form-control"/>
                    </div>
                    <span class="form-message"></span>
                </div>

                <div class="form-group">
                    <div class="input-group">
                        <i class="fas fa-envelope input-icon"></i>
                        <input id="email" name="email" rules="required|email" type="email" placeholder="Email" class="form-control"/>
                    </div>
                    <span class="form-message"></span>
                </div>

                <div class="form-group">
                    <div class="input-group">
                        <i class="fas fa-lock input-icon"></i>
                        <input id="password" name="password" rules="required|min:6" type="password" placeholder="Mật khẩu" class="form-control"/>
                        <i class="fas fa-eye-slash toggle-password"></i>
                    </div>
                    <span class="form-message"></span>
                </div>

                <div class="form-group">
                    <div class="input-group">
                        <i class="fas fa-lock input-icon"></i>
                        <input id="confirm-password" name="confirm-password" rules="required|min:6" type="password" placeholder="Xác nhận mật khẩu" class="form-control"/>
                        <i class="fas fa-eye-slash toggle-password"></i>
                    </div>
                    <span class="form-message"></span>
                </div>

                <div class="form-options">
                    <label class="remember-me">
                        <input type="checkbox" name="terms" required/>
                        <span>Tôi đồng ý với <a href="#" class="terms-link">điều khoản sử dụng</a></span>
                    </label>
                </div>

                <button class="form-submit">
                    <i class="fas fa-user-plus"></i>
                    Đăng ký
                </button>

                <div class="register-link">
                    Đã có tài khoản? <a href="/src/view/common_view/login.html">Đăng nhập</a>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Signup