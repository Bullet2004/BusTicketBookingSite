import React from 'react'
import qr from '../../../assets/qr.png'
import styles from './FooterClient.module.css'

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>Cam kết</h3>
            <ul>
              <li>
                <i className="ti-check check-icon"></i>
                Uy tín
              </li>
              <li>
                <i className="ti-check check-icon"></i>
                Chất lượng
              </li>
              <li>
                <i className="ti-check check-icon"></i>
                Tận tình
              </li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h3>Truy cập</h3>
            <ul>
              <li><a href="#">Đặt vé</a></li>
              <li><a href="#">Lịch trình</a></li>
              <li><a href="#">Tuyến đường</a></li>
              <li><a href="#">Các câu hỏi thường gặp</a></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h3>Contact Info</h3>
            <ul className={styles.contactInfo}>
              <li><i className="fas fa-phone"></i> 0949397986</li>
              <li><i className="fas fa-envelope"></i> info@phucnguyenbus.com</li>
              <li><i className="fas fa-map-marker-alt"></i> Nghệ An - Hà Tĩnh - Lệ Thuỷ</li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h3>Theo dõi chúng tôi</h3>
            <div className={styles.socialLinks}>
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-zalo"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
            <div className={styles.qrCode}>
              <img src={qr} alt="Zalo QR Code" />
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2025 Phuc Nguyen Bus. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
