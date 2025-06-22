import React, { useState } from 'react'
import styles from './ClientHomePage.module.css'
import Header from '../../../Components/Clients/Header/Header'
import danang from '../../../assets/danang.png'
import hue from '../../../assets/hue.jpg'
import lethhuy from '../../../assets/lethuy.jpg'
import hcm from '../../../assets/hochiminh.jfif'
import thienphu1 from '../../../assets/thienphu1.jpg'
import thienphu2 from '../../../assets/thienphu2.jpg'
import thienphu3 from '../../../assets/thienphu3.jpg'
import bus from '../../../assets/bus.png'
import BookCard from '../../../Components/Clients/BookCard/BookCard'
import Footer from '../../../Components/Clients/Footer/Footer'

const ClientHomePage = () => {

  const routes = [
    {
      img: {danang},
      from: 'Lệ Thuỷ - Quảng Bình',
      destination: 'Đà Nẵng',
      price: 150000,
      during: '250km - 5 giờ'
    },
    {
      img: hue,
      from: 'Đồng Hới - Quảng Bình',
      destination: 'Huế',
      price: 120000,
      during: '200km - 4 giờ'
    },
    {
      img: lethhuy,
      from: 'Lệ Thuỷ - Quảng Bình',
      destination: 'Đồng Hới - Quảng Bình',
      price: 50000,
      during: '50km - 30 phút'
    },
    {
      img: hcm,
      from: 'Đà Nẵng',
      destination: 'TP. Hồ Chí Minh',
      price: 500000,
      during: '900km - 18 giờ'
    },
  ]

  const [visible, setVisible] = useState(false);

  return (
    <>
      <Header />
      <div className={styles.sliderContainer}>
        <div className={styles.slider}>
          <div className={`${styles.slide} ${styles.active}`}>
            <img src={thienphu2} alt="Luxury Bus Interior" />
            <div className={styles.slideContent}>
              <h2>Du lịch thoải mái</h2>
              <p>Trải nghiệm với không gian cùng nội thất sang trọng của chúng tôi</p>
            </div>
          </div>
          <div className={styles.slide}>
            <img src={thienphu1} alt="Night Bus Service" />
            <div className={styles.slideContent}>
              <h2>Dịch vụ hỗ trợ 24/7</h2>
              <p>Du lịch bất cứ lúc nào với lịch trình thuận tiện</p>
            </div>
          </div>
        </div>
        <button className={`${styles.sliderBtn} ${styles.prev}`}><i className="fas fa-chevron-left"></i></button>
        <button className={`${styles.sliderBtn} ${styles.next}`}><i className="fas fa-chevron-right"></i></button>
        <div className={styles.sliderDots}></div>
      </div>

      <div id="body">
        <section className={styles.sloganSection}>
          <div className={styles.sloganContent}>
            <h2 className={styles.sloganTitle}>An toàn - Tiện nghi - Đúng giờ</h2>
            <p className={styles.sloganText}>Với đội ngũ tài xế chuyên nghiệp, xe mới và hiện đại, chúng tôi cam kết mang đến cho quý khách hàng những chuyến đi thoải mái và an toàn nhất.</p>
            <div className={styles.sloganFeatures}>
              <div className={styles.sloganFeature}>
                <i className="fas fa-shield-alt"></i>
                <span>An toàn tuyệt đối</span>
              </div>
              <div className={styles.sloganFeature}>
                <i className="fas fa-clock"></i>
                <span>Đúng giờ</span>
              </div>
              <div className={styles.sloganFeature}>
                <i className="fas fa-star"></i>
                <span>Chất lượng 5 sao</span>
              </div>
            </div>
          </div>
        </section>

        <div className={styles.commitment}>
          <div className={styles.busImage}>
            <img src={bus} alt="" className={styles.busImg} />
          </div>
          <div className={styles.commitmentDetail}>
            <h1 className={styles.commitmentHeader}>TẠI SAO NÊN ĐẶT XE CỦA CHÚNG TÔI ?</h1>
            <ul className={styles.commitmentList}>
              <li className={styles.commitmentItem}>
                <i className={`ti-check-box ${styles.commitmentIcon}`}></i>
                <span>Uy tín, chất lượng</span>
              </li>
              <li className={styles.commitmentItem}>
                <i className={`ti-check-box ${styles.commitmentIcon}`}></i>
                <span>Tiện nghi, thoải mái như ở nhà</span>
              </li>
              <li className={styles.commitmentItem}>
                <i className={`ti-check-box ${styles.commitmentIcon}`}></i>
                <span>Đưa đón tận nơi</span>
              </li>
              <li className={styles.commitmentItem}>
                <i className={`ti-check-box ${styles.commitmentIcon}`}></i>
                <span>Phục vụ khách hàng hết mình</span>
              </li>
            </ul>
          </div>
        </div>

        <h1 className={styles.title}>ĐẶT VÉ NGAY HÔM NAY</h1>
        <div className={styles.listRoutes}>
          {routes.map((route, index) => (
            <BookCard
              key={index}
              img={hue}
              from={route.from}
              destination={route.destination}
              price={route.price}
              during={route.during}
              setVisible = {setVisible}
            />
          ))}
        </div>

        <div className={styles.floatingButtons}>
          <div className={styles.floatingButton} id={styles.phoneBtn}>
            <i className="fas fa-phone"></i>
            <span className={styles.tooltip}>0987 654 321</span>
          </div>
          <div className={styles.floatingButton} id="facebookBtn">
            <i className="fab fa-facebook"></i>
            <span className={styles.tooltip}>
              <a href="https://www.facebook.com/thecuong.bui.710" target="_blank" style={{ color: 'white', textDecoration: 'none' }}>facebook.com</a>
            </span>
          </div>
        </div>

        <div className={`${styles.modal} ${visible?styles.open:""}`} onClick={()=>setVisible(false)}>
          <div className={styles.modalContainer} onClick={(e)=>e.stopPropagation()}>
            <div className={styles.modalClose}>
              <i className="ti-close"></i>
            </div>

            <header className={styles.modalHeader}>
              <i className="ti-bag"></i>
              Đặt vé
            </header>

            <div className={styles.modalBody}>
              <div className={styles.modalGroup}>
                <label htmlFor="" className={styles.infoLabel}>Số điện thoại</label>
                <input type="text" id="phone" className={styles.infoInput} value="0123456789" readOnly />
              </div>
              <div className={styles.modalGroup}>
                <label htmlFor="" className={styles.infoLabel}>Tuyến xe</label>
                <input type="text" id="routeName" value="Lệ Thuỷ -> Đồng Hới" className={styles.infoInput} readOnly />
              </div>
              <div className={styles.modalGroup}>
                <label htmlFor="" className={styles.infoLabel}>Số chỗ</label>
                <input type="number" id="seatNumber" className={styles.infoInput} min="0" max="30" placeholder="VD: 2" />
              </div>
              <div className={styles.modalGroup}>
                <label htmlFor="" className={styles.infoLabel}>Giá vé</label>
                <input type="text" value="100.000đ" id="ticketPrice" className={styles.infoInput} readOnly />
              </div>
              <div className={styles.modalGroup}>
                <label htmlFor="" className={styles.infoLabel}>Ngày khởi hành</label>
                <input type="date" id="departureDate" className={styles.infoInput} />
              </div>
              <button className={styles.okBtn}>Xác nhận</button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default ClientHomePage
