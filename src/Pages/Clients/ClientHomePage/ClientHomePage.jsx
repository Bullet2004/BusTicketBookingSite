import React, { useState, useEffect, useRef } from 'react'; // BẠN ĐANG THIẾU useRef
import styles from './ClientHomePage.module.css';
import Header from '../../../Components/Clients/Header/Header';
import danang from '../../../assets/danang.png';
import hue from '../../../assets/hue.jpg';
import lethhuy from '../../../assets/lethuy.jpg';
import hcm from '../../../assets/hochiminh.jfif';
import thienphu1 from '../../../assets/thienphu1.jpg';
import thienphu2 from '../../../assets/thienphu2.jpg';
import thienphu3 from '../../../assets/thienphu3.jpg';
import bus from '../../../assets/bus.png';
import BookCard from '../../../Components/Clients/BookCard/BookCard';
import Footer from '../../../Components/Clients/Footer/Footer';

const ClientHomePage = () => {

  const routes = [
    {
      image: danang,
      start: 'Lệ Thuỷ - Quảng Bình',
      destination: 'Đà Nẵng',
      price: 150000,
      during: '250km - 5 giờ'
    },
    {
      image: hue,
      start: 'Đồng Hới - Quảng Bình',
      destination: 'Huế',
      price: 120000,
      during: '200km - 4 giờ'
    },
    {
      image: lethhuy,
      start: 'Lệ Thuỷ - Quảng Bình',
      destination: 'Đồng Hới - Quảng Bình',
      price: 50000,
      during: '50km - 30 phút'
    },
    {
      image: hcm,
      start: 'Đà Nẵng',
      destination: 'TP. Hồ Chí Minh',
      price: 500000,
      during: '900km - 18 giờ'
    },
  ];

  const slides = [
    {
      image: thienphu2,
      title: "Du lịch thoải mái",
      description: "Trải nghiệm với không gian cùng nội thất sang trọng của chúng tôi"
    },
    {
      image: thienphu3,
      title: "Phục vụ tận tình",
      description: "Chúng tôi phục vụ hành khách hết mình"
    },
    {
      image: thienphu1,
      title: "Dịch vụ hỗ trợ 24/7",
      description: "Giải đáp mọi thắc mắc của hành khách bất cứ lúc nào"
    }
  ];

  const [visible, setVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = slides.length;
  const slideInterval = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideCount);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    startSlide();
    return () => stopSlide();
  }, []);

  const startSlide = () => {
    slideInterval.current = setInterval(() => {
      nextSlide();
    }, 5000);
  };

  const stopSlide = () => {
    clearInterval(slideInterval.current);
  };

  return (
    <>
      <Header />

      {/* Slider */}
      <div className={styles.sliderContainer} onMouseEnter={stopSlide} onMouseLeave={startSlide}>
        <div
          className={styles.sliderTrack}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className={styles.slide}>
              <img src={slide.image} alt={slide.title} />
              <div className={styles.slideContent}>
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button className={`${styles.sliderBtn} ${styles.prev}`} onClick={prevSlide}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className={`${styles.sliderBtn} ${styles.next}`} onClick={nextSlide}>
          <i className="fas fa-chevron-right"></i>
        </button>

        <div className={styles.sliderDots}>
          {slides.map((_, index) => (
            <div
              key={index}
              className={`${styles.dot} ${index === currentSlide ? styles.active : ''}`}
              onClick={() => goToSlide(index)}
            ></div>
          ))}
        </div>
      </div>

      {/* Body */}
      <div id="body">
        <section className={styles.sloganSection}>
          <div className={styles.sloganContent}>
            <h2 className={styles.sloganTitle}>An toàn - Tiện nghi - Đúng giờ</h2>
            <p className={styles.sloganText}>
              Với đội ngũ tài xế chuyên nghiệp, xe mới và hiện đại, chúng tôi cam kết mang đến cho quý khách hàng những chuyến đi thoải mái và an toàn nhất.
            </p>
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
            <img src={bus} alt="bus" className={styles.busImg} />
          </div>
          <div className={styles.commitmentDetail}>
            <h1 className={styles.commitmentHeader}>TẠI SAO NÊN ĐẶT XE CỦA CHÚNG TÔI ?</h1>
            <ul className={styles.commitmentList}>
              <li className={styles.commitmentItem}>
                <i className={`fa-solid fa-check ${styles.commitmentIcon}`}></i>
                <span>Uy tín, chất lượng</span>
              </li>
              <li className={styles.commitmentItem}>
                <i className={`fa-solid fa-check ${styles.commitmentIcon}`}></i>
                <span>Tiện nghi, thoải mái như ở nhà</span>
              </li>
              <li className={styles.commitmentItem}>
                <i className={`fa-solid fa-check ${styles.commitmentIcon}`}></i>
                <span>Đưa đón tận nơi</span>
              </li>
              <li className={styles.commitmentItem}>
                <i className={`fa-solid fa-check ${styles.commitmentIcon}`}></i>
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
              img={route.image}
              start={route.start}
              destination={route.destination}
              price={route.price}
              during={route.during}
              setVisible={setVisible}
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
              <a href="https://www.facebook.com/thecuong.bui.710" target="_blank" rel="noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                facebook.com
              </a>
            </span>
          </div>
        </div>

        {/* Modal */}
        <div className={`${styles.modal} ${visible ? styles.open : ""}`} onClick={() => setVisible(false)}>
          <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalClose} onClick={() => setVisible(false)}>
              <i className="fa-solid fa-xmark"></i>
            </div>

            <header className={styles.modalHeader}>
              <i className="fa-solid fa-briefcase"></i>
              Đặt vé
            </header>

            <div className={styles.modalBody}>
              <div className={styles.modalGroup}>
                <label htmlFor="phone" className={styles.infoLabel}>Số điện thoại</label>
                <input type="text" id="phone" className={styles.infoInput} value="0123456789" readOnly />
              </div>
              <div className={styles.modalGroup}>
                <label htmlFor="routeName" className={styles.infoLabel}>Tuyến xe</label>
                <input type="text" id="routeName" value="Lệ Thuỷ -> Đồng Hới" className={styles.infoInput} readOnly />
              </div>
              <div className={styles.modalGroup}>
                <label htmlFor="seatNumber" className={styles.infoLabel}>Số chỗ</label>
                <input type="number" id="seatNumber" className={styles.infoInput} min="0" max="30" placeholder="VD: 2" />
              </div>
              <div className={styles.modalGroup}>
                <label htmlFor="ticketPrice" className={styles.infoLabel}>Giá vé</label>
                <input type="text" value="100.000đ" id="ticketPrice" className={styles.infoInput} readOnly />
              </div>
              <div className={styles.modalGroup}>
                <label htmlFor="departureDate" className={styles.infoLabel}>Ngày khởi hành</label>
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

export default ClientHomePage;
