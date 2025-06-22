import React from 'react'
import logo from '../../../assets/logo.svg'
import styles from '../Login/Login.module.css'

const Signup = () => {
  return (
    <div className={styles.main}>
      <div className={`${styles.loginContainer} ${styles.signupContainer}`}>
        <div className={styles.loginHeader}>
          <img src={logo} alt="Phúc Nguyên Bus Logo" className={styles.loginLogo} />
          <div className={styles.loginHeaderContent}>
            <h2>Đăng ký tài khoản</h2>
            <p className={styles.loginSubtitle}>Tham gia cùng Phúc Nguyên Bus ngay hôm nay</p>
          </div>
        </div>

        <form action="" method="POST" className={styles.form} id="form-1">
          <div className={styles.formGroup}>
            <div className={styles.inputGroup}>
              <i className={`fas fa-user ${styles.inputIcon}`}></i>
              <input id="fullname" name="fullname" rules="required" type="text" placeholder="Họ và tên" className={styles.formControl} />
            </div>
            <span className={styles.formMessage}></span>
          </div>

          <div className={styles.formGroup}>
            <div className={styles.inputGroup}>
              <i className={`fas fa-phone ${styles.inputIcon}`}></i>
              <input id="phone" name="phone" rules="required|min:10" type="text" placeholder="Số điện thoại" className={styles.formControl} />
            </div>
            <span className={styles.formMessage}></span>
          </div>

          <div className={styles.formGroup}>
            <div className={styles.inputGroup}>
              <i className={`fas fa-envelope ${styles.inputIcon}`}></i>
              <input id="email" name="email" rules="required|email" type="email" placeholder="Email" className={styles.formControl} />
            </div>
            <span className={styles.formMessage}></span>
          </div>

          <div className={styles.formGroup}>
            <div className={styles.inputGroup}>
              <i className={`fas fa-lock ${styles.inputIcon}`}></i>
              <input id="password" name="password" rules="required|min:6" type="password" placeholder="Mật khẩu" className={styles.formControl} />
              <i className={`fas fa-eye-slash ${styles.togglePassword}`}></i>
            </div>
            <span className={styles.formMessage}></span>
          </div>

          <div className={styles.formGroup}>
            <div className={styles.inputGroup}>
              <i className={`fas fa-lock ${styles.inputIcon}`}></i>
              <input id="confirm-password" name="confirm-password" rules="required|min:6" type="password" placeholder="Xác nhận mật khẩu" className={styles.formControl} />
              <i className={`fas fa-eye-slash ${styles.togglePassword}`}></i>
            </div>
            <span className={styles.formMessage}></span>
          </div>

          <div className={styles.formOptions}>
            <label className={styles.rememberMe}>
              <input type="checkbox" name="terms" required />
              <span>Tôi đồng ý với <a href="#" className={styles.termsLink}>điều khoản sử dụng</a></span>
            </label>
          </div>

          <button className={styles.formSubmit}>
            <i className="fas fa-user-plus"></i>
            Đăng ký
          </button>

          <div className={styles.registerLink}>
            Đã có tài khoản? <a href="/src/view/common_view/login.html">Đăng nhập</a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
