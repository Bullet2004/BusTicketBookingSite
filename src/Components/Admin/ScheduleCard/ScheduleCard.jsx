import React from 'react'
import styles from './ScheduleCard.module.css'
import danang from '../../../assets/danang.png'

const ScheduleCard = () => {
  return (
     <div className={styles.scheduleItem}>
        <img src={danang} alt="" className={styles.scheduleImg} />
        <div className={styles.scheduleGroup}>
            <div className={styles.scheduleStartGroup}>
                <label className={styles.scheduleStartLabel}>Xuất phát: </label>
                <span className={styles.scheduleStartPosition}>Lệ Thuỷ - Quảng Bình</span>
            </div>
            <div className={styles.endGroup}>
                <label className={styles.scheduleEndLabel}>Điểm đến: </label>
                <span className={styles.scheduleEndPosition}>Bến xe trung tâm Đà Nẵng</span>
            </div>
            <div className={styles.timePriceGroup}>
                <i className="ti-timer"></i>
                300km - 4 giờ
                <span className={styles.price}>500.000đ</span>
            </div>
        </div>
        <div className={styles.scheduleActionGroup}>
            <i className="fa-solid fa-pen"></i>
            <i className="fa-solid fa-trash"></i>
        </div>
    </div>
  )
}

export default ScheduleCard
