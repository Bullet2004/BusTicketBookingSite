import React, { useEffect, useRef } from 'react';
import styles from './ClientIntroductionPage.module.css';
import background from '../../../assets/thienphu1.jpg'
import Header from '../../../Components/Clients/Header/Header';
import Footer from '../../../Components/Clients/Footer/Footer';

const ClientIntroductionPage = () => {
    const reasons = [
        {
            title: 'Uy tín, chất lượng',
            desc: 'Trang web đặt xe khách cam kết hợp tác với các nhà xe uy tín, đảm bảo đúng giờ, đúng tuyến và chất lượng dịch vụ tốt nhất. Nhà xe được kiểm duyệt kĩ lưỡng trước khi khởi hành, có thông tin minh bạch về giá cả, lộ trình.'
        },
        {
            title: 'Tiện nghi, thoải mái',
            desc: 'Xe khách được trang bị đầy đủ tiện nghi như ghế ngồi hoặc giường nằm êm ái, điều hòa, wifi miễn phí, ổ cắm sạc, nước uống và chăn mền. Không gian sạch sẽ, hiện đại, giúp hành khách thư giãn trong suốt chuyến đi.'
        },
        {
            title: 'Đưa đón tận nơi',
            desc: 'Dịch vụ đưa đón tận nơi hỗ trợ hành khách tiết kiệm thời gian và công sức, đặc biệt là với những người ở xa bến xe. Có trung chuyển đón khách từ nhà, khách sạn, hoặc các điểm hẹn trong khu vực gần bến.'
        },
        {
            title: 'Phục vụ khách hàng hết mình',
            desc: 'Đội ngũ nhân viên nhà xe luôn sẵn sàng hỗ trợ khách hàng, từ giải đáp thắc mắc, hướng dẫn đặt vé, đến xử lý các vấn đề phát sinh trong hành trình.'
        }
    ];

    const cardRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                    observer.unobserve(entry.target); // chỉ chạy 1 lần
                }
            });
        }, { threshold: 0.2 }); // visible 20% mới chạy

        cardRefs.current.forEach(card => {
            if (card) observer.observe(card);
        });

        return () => observer.disconnect();
    }, []);

    return (    
        <>
            <Header />
            <section className={`${styles.introBackground} ${styles.introHero}`} style={{ backgroundImage: `url(${background})` }}>  
                  <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Nhà xe Phúc Nguyên</h1>
                    <p className={styles.heroSubtitle}>Chất lượng dịch vụ, tiện nghi và an toàn</p>
                    <div className={styles.heroDescription}>
                        <p>Với đội ngũ tài xế chuyên nghiệp và phụ xe chu đáo, nhiệt tình, chúng tôi cam kết mang đến cho quý khách hàng những chuyến đi thoải mái và an toàn nhất.</p>
                    </div>
                </div>
            </section>
            <section className={styles.featuresSection}>
                <div className={styles.featuresContainer}>
                    <div className={styles.featureCard}>
                        <div className={styles.featureIcon}>
                            <i className="fas fa-shield-alt"></i>
                        </div>
                        <h3>An toàn được đảm bảo</h3>
                        <p>Trang web đặt vé xe của chúng tôi cam kết mang đến sự an toàn tuyệt đối cho mỗi hành trình. Tất cả các đối tác vận chuyển đều được chọn lọc kỹ lưỡng, đảm bảo chất lượng xe, đội ngũ tài xế chuyên nghiệp và tuân thủ đầy đủ các tiêu chuẩn an toàn.</p>
                    </div>
                    <div className={styles.featureCard}>
                        <div className={styles.featureIcon}>
                            <i className="fas fa-headset"></i>
                        </div>
                        <h3>Hỗ trợ tận tâm</h3>
                        <p>Đội ngũ hỗ trợ khách hàng của chúng tôi luôn sẵn sàng 24/7 để giải đáp mọi thắc mắc và hỗ trợ bạn trong quá trình đặt vé. Với sự tận tâm và chuyên nghiệp, chúng tôi mang đến trải nghiệm dịch vụ nhanh chóng, tiện lợi và hài lòng.</p>
                    </div>
                </div>
            </section>
            <section className={styles.whyChooseUs}>
                <h2 className={styles.sectionTitle}>Lý do bạn nên đặt vé tại Phúc Nguyên</h2>
                <div className={styles.reasonsGrid}>
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className={styles.reasonCard}
                            ref={el => cardRefs.current[index] = el}
                            style={{ animationPlayState: 'paused' }}
                        >
                            <div className={styles.reasonIcon}>
                                <i className="fas fa-star"></i>
                            </div>
                            <h3>{reason.title}</h3>
                            <p>{reason.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ClientIntroductionPage;
