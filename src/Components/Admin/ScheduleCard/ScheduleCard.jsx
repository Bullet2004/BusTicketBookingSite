import React from 'react'
import styles from './ScheduleCard.module.css'
import danang from '../../../assets/danang.png'

const ScheduleCard = ({img,startPos,endPos,during,total,setEditModalVisible,setDeleteModalVisible}) => {
  return (
     <div className={styles.scheduleItem}>
        <img src={img} alt="" className={styles.scheduleImg} />
        <div className={styles.scheduleGroup}>
            <div className={styles.scheduleStartGroup}>
                <label className={styles.scheduleStartLabel}>Xuất phát: </label>
                <span className={styles.scheduleStartPosition}>{startPos}</span>
            </div>
            <div className={styles.endGroup}>
                <label className={styles.scheduleEndLabel}>Điểm đến: </label>
                <span className={styles.scheduleEndPosition}>{endPos}</span>
            </div>
            <div className={styles.timePriceGroup}>
                <i className="ti-timer"></i>
                {during}
                <span className={styles.price}>{total}đ</span>
            </div>
        </div>
        <div className={styles.scheduleActionGroup}>
            <i className="fa-solid fa-pen" onClick={()=>setEditModalVisible(true)}></i>
            <i className="fa-solid fa-trash" onClick={()=>setDeleteModalVisible(true)}></i>
        </div>
    </div>
  )
}

export default ScheduleCard
