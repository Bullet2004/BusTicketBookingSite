import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../Login/Login.css'
import logo from '../../../assets/logo.svg'

const Signup = () => {
  return (
    <div className="main">
        <div className="login-container signup-container">
            <div className="login-header">
                <img src={logo} alt="Phúc Nguyên Bus Logo" className="login-logo"/>
                <div className="login-header-content">
                    <h2>Đăng ký tài khoản</h2>
                    <p className="login-subtitle">Tham gia cùng Phúc Nguyên Bus ngay hôm nay</p>
                </div>
            </div>
            
            <form action="" method="POST" className="form" id="form-1">
                <div className="form-group">
                    <div className="input-group">
                        <i className="fas fa-user input-icon"></i>
                        <input id="fullname" name="fullname" rules="required" type="text" placeholder="Họ và tên" className="form-control"/>
                    </div>
                    <span className="form-message"></span>
                </div>

                <div className="form-group">
                    <div className="input-group">
                        <i className="fas fa-phone input-icon"></i>
                        <input id="phone" name="phone" rules="required|min:10" type="text" placeholder="Số điện thoại" className="form-control"/>
                    </div>
                    <span className="form-message"></span>
                </div>

                <div className="form-group">
                    <div className="input-group">
                        <i className="fas fa-envelope input-icon"></i>
                        <input id="email" name="email" rules="required|email" type="email" placeholder="Email" className="form-control"/>
                    </div>
                    <span className="form-message"></span>
                </div>

                <div className="form-group">
                    <div className="input-group">
                        <i className="fas fa-lock input-icon"></i>
                        <input id="password" name="password" rules="required|min:6" type="password" placeholder="Mật khẩu" className="form-control"/>
                        <i className="fas fa-eye-slash toggle-password"></i>
                    </div>
                    <span className="form-message"></span>
                </div>

                <div className="form-group">
                    <div className="input-group">
                        <i className="fas fa-lock input-icon"></i>
                        <input id="confirm-password" name="confirm-password" rules="required|min:6" type="password" placeholder="Xác nhận mật khẩu" className="form-control"/>
                        <i className="fas fa-eye-slash toggle-password"></i>
                    </div>
                    <span className="form-message"></span>
                </div>

                <div className="form-options">
                    <label className="remember-me">
                        <input type="checkbox" name="terms" required/>
                        <span>Tôi đồng ý với <a href="#" className="terms-link">điều khoản sử dụng</a></span>
                    </label>
                </div>

                <button className="form-submit">
                    <i className="fas fa-user-plus"></i>
                    Đăng ký
                </button>

                <div className="register-link">
                    Đã có tài khoản? <a href="/src/view/common_view/login.html">Đăng nhập</a>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Signup