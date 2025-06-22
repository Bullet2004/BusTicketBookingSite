import React from 'react';
import styles from './ClientContactPage.module.css';
import Header from '../../../Components/Clients/Header/Header';
import Footer from '../../../Components/Clients/Footer/Footer';

const ClientContactPage = () => {
  return (
    <>
      <Header />
      <section className={styles.contactHeader}>
        <div className={styles.contactHeaderContent}>
          <div className={styles.contactHeaderText}>
            <h1>Liên hệ với chúng tôi</h1>
            <p>Chúng tôi luôn sẵn sàng hỗ trợ và giải đáp mọi thắc mắc của bạn</p>
            <div className={styles.contactHeaderInfo}>
              <div className={styles.contactHeaderItem}>
                <i className="fas fa-phone"></i>
                <span>0123456789</span>
              </div>
              <div className={styles.contactHeaderItem}>
                <i className="fas fa-envelope"></i>
                <span>phucnguyenbus@gmail.com</span>
              </div>
              <div className={styles.contactHeaderItem}>
                <i className="fas fa-clock"></i>
                <span>24/7</span>
              </div>
            </div>
          </div>
          <div className={styles.contactHeaderMap}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.197353042045!2d105.78049931540215!3d21.030825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4cd0c66f05%3A0xea31563511af2e54!2zOTcgxJDGsOG7nW5nIEPhuqd1IEdp4bqleSwgUXVhbiBIb2EsIENhaSBMYW0sIEPhuqd1IEdp4bqleSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1647890123456!5m2!1svi!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Contact Map"
            ></iframe>
          </div>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.contactContainer}>
          <div className={styles.contactInfo}>
            <h2 className={styles.contactInfoTitle}>Thông tin liên hệ</h2>
            <div className={styles.contactInfoItem}>
              <div className={styles.contactIcon}>
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className={styles.contactInfoContent}>
                <h3>Địa chỉ</h3>
                <p>123 Đường ABC, Quận 1, TP.HCM</p>
              </div>
            </div>
            <div className={styles.contactInfoItem}>
              <div className={styles.contactIcon}>
                <i className="fas fa-phone"></i>
              </div>
              <div className={styles.contactInfoContent}>
                <h3>Điện thoại</h3>
                <p>0123456789</p>
              </div>
            </div>
            <div className={styles.contactInfoItem}>
              <div className={styles.contactIcon}>
                <i className="fas fa-envelope"></i>
              </div>
              <div className={styles.contactInfoContent}>
                <h3>Email</h3>
                <p>contact@phucnguyenbus.com</p>
              </div>
            </div>
            <div className={styles.contactInfoItem}>
              <div className={styles.contactIcon}>
                <i className="fas fa-clock"></i>
              </div>
              <div className={styles.contactInfoContent}>
                <h3>Giờ làm việc</h3>
                <p>Thứ 2 - Chủ nhật: 7:00 - 22:00</p>
              </div>
            </div>
          </div>

          <div className={styles.contactForm}>
            <h2 className={styles.formTitle}>Gửi tin nhắn</h2>
            <form id="contactForm">
              <div className={styles.formGroup}>
                <label htmlFor="name">Họ và tên</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone">Số điện thoại</label>
                <input type="tel" id="phone" name="phone" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Nội dung</label>
                <textarea id="message" name="message" required></textarea>
              </div>
              <button type="submit" className={styles.submitBtn}>Gửi tin nhắn</button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ClientContactPage;
