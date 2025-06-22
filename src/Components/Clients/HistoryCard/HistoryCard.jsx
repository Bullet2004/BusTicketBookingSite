import React from 'react'
import styles from './HistoryCard.module.css'

const HistoryCard = ({ route, code, dates, times, numPeople, positions, status, total }) => {

    let statusClass = ''
    let statusIcon = ''
    let statusText = ''

    if (status === 'completed') {
        statusClass = styles.statusCompleted
        statusIcon = 'fas fa-check-circle'
        statusText = 'Đã hoàn thành'
    } else if (status === 'pending') {
        statusClass = styles.statusPending
        statusIcon = 'fas fa-clock'
        statusText = 'Chờ thanh toán'
    } else if (status === 'cancelled') {
        statusClass = styles.statusCancelled
        statusIcon = 'fas fa-times-circle'
        statusText = 'Đã hủy'
    }

    return (
        <div className={styles.historyCard}>
            <div className={styles.historyCardHeader}>
                <h3>{route}</h3>
                <p>Mã vé: {code}</p>
            </div>
            <div className={styles.historyCardBody}>
                <div className={styles.historyInfo}>
                    <div className={styles.historyInfoItem}>
                        <i className="fas fa-calendar"></i>
                        <span>{dates}</span>
                    </div>
                    <div className={styles.historyInfoItem}>
                        <i className="fas fa-clock"></i>
                        <span>{times}</span>
                    </div>
                    <div className={styles.historyInfoItem}>
                        <i className="fas fa-user"></i>
                        <span>{numPeople} người</span>
                    </div>
                    <div className={styles.historyInfoItem}>
                        <i class="fa-solid fa-couch"></i>
                        <span>Ghế: {positions}</span>
                    </div>
                </div>
                <div className={`${styles.historyStatus} ${statusClass}`}>
                    <i className={statusIcon}></i> {statusText}
                </div>
            </div>
            <div className={styles.historyCardFooter}>
                <div className={styles.historyPrice}>
                    Tổng tiền: <span>{total}đ</span>
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
