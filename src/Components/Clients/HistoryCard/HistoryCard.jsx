import React from 'react'
import styles from './HistoryCard.module.css'

const HistoryCard = () => {
  return (
    <div className={styles.historyCard}>
        <div className={styles.historyCardHeader}>
            <h3>Hà Nội - Hải Phòng</h3>
            <p>Mã vé: #HNHP123456</p>
        </div>
        <div className={styles.historyCardBody}>
            <div className={styles.historyInfo}>
                <div className={styles.historyInfoItem}>
                    <i className="fas fa-calendar"></i>
                    <span>20/03/2024</span>
                </div>
                <div className={styles.historyInfoItem}>
                    <i className="fas fa-clock"></i>
                    <span>08:00 - 10:30</span>
                </div>
                <div className={styles.historyInfoItem}>
                    <i className="fas fa-user"></i>
                    <span>2 người</span>
                </div>
                <div className={styles.historyInfoItem}>
                    <i className="fas fa-chair"></i>
                    <span>Ghế: 12, 13</span>
                </div>
            </div>
            <div className={`${styles.historyStatus} ${styles.statusCompleted}`}>
                <i className="fas fa-check-circle"></i> Đã hoàn thành
            </div>
        </div>
        <div className={styles.historyCardFooter}>
            <div className={styles.historyPrice}>
                Tổng tiền: <span>400.000đ</span>
            </div>
            <div className={styles.historyActions}>
                <button className={`${styles.historyBtn} ${styles.historyBtnPrimary}`}>
                    <i className="fas fa-download"></i> Tải vé
                </button>
                <button className={`${styles.historyBtn} ${styles.historyBtnSecondary}`}>
                    <i className="fas fa-star"></i> Đánh giá
                </button>
            </div>
        </div>
    </div>
  )
}

export default HistoryCard
