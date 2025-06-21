import React from 'react'
import './ScheduleCard.css'
import danang from '../../../assets/danang.png'

const ScheduleCard = () => {
  return (
     <div className="schedule-item">
        <img src={danang} alt="" className="schedule-img"/>
        <div className="schedule-group">
            <div className="schedule-start-group">
                <label for="" className="schedule-start-label">Xuất phát: </label>
                <span className="schedule-start-postion">Lệ Thuỷ - Quảng Bình</span>
            </div>
            <div className="end-group">
                <label for="" className="schedule-end-label">Điểm đến: </label>
                <span className="schedule-end-position">Bến xe trung tâm Đà Nẵng</span>
            </div>
            <div className="time-price-group">
                <i className="ti-timer"></i>
                300km - 4 giờ
                <span className="price">500.000đ</span>
            </div>
        </div>
        <div className="schedule-action-group">
            <i className="fa-solid fa-pen"></i>
            <i className="fa-solid fa-trash"></i>
        </div>
    </div>
  )
}

export default ScheduleCard