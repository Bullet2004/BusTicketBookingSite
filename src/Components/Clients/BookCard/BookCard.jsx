import React from 'react'
import styles from './BookCard.module.css'
import danang from '../../../assets/danang.png';

const BookCard = () => {
  return (
    <div className={styles.routeItem}>
        <div className={styles.demoContainer}>
            <img src={danang} alt="" className={styles.demoImage}/>
            <span className={styles.from}>Tuyến xe từ</span>
            <span className={styles.fromPosition}>Lệ Thuỷ - Quảng Bình</span>
        </div>
        <div className={styles.routeDetail}>
            <div className={styles.destinationAndPrice}>
                <span className={styles.destination}>Đồng Hới - Quảng Bình</span>
                <span className={styles.price}>50.000đ</span>
            </div>
            <span className={styles.during}>
                <i className="ti-timer"></i>
                50km - 30 phút</span>
            <button  className={styles.bookBtn}>Đặt vé</button>
        </div>
    </div>
  )
}

export default BookCard