import React from 'react'
import styles from './BookCard.module.css'
import danang from '../../../assets/danang.png';

const BookCard = ({img, from, destination, price, during, setVisible}) => {
  return (
    <div className={styles.routeItem}>
        <div className={styles.demoContainer}>
            <img src={img} alt="" className={styles.demoImage}/>
            <span className={styles.from}>Tuyến xe từ</span>
            <span className={styles.fromPosition}>{from}</span>
        </div>
        <div className={styles.routeDetail}>
            <div className={styles.destinationAndPrice}>
                <span className={styles.destination}>{destination}</span>
                <span className={styles.price}>{price}đ</span>
            </div>
            <span className={styles.during}>
                <i className="ti-timer"></i>
                {during}</span>
            <button className={styles.bookBtn} onClick={()=>setVisible(true)}>Đặt vé</button>
        </div>
    </div>
  )
}

export default BookCard