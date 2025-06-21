import React from 'react'
import './HistoryCard.css'

const HistoryCard = () => {
  return (
    <div className="history-card">
        <div className="history-card-header">
            <h3>Hà Nội - Hải Phòng</h3>
            <p>Mã vé: #HNHP123456</p>
        </div>
        <div className="history-card-body">
            <div className="history-info">
                <div className="history-info-item">
                    <i className="fas fa-calendar"></i>
                    <span>20/03/2024</span>
                </div>
                <div className="history-info-item">
                    <i className="fas fa-clock"></i>
                    <span>08:00 - 10:30</span>
                </div>
                <div className="history-info-item">
                    <i className="fas fa-user"></i>
                    <span>2 người</span>
                </div>
                <div className="history-info-item">
                    <i className="fas fa-chair"></i>
                    <span>Ghế: 12, 13</span>
                </div>
            </div>
            <div className="history-status status-completed">
                <i className="fas fa-check-circle"></i> Đã hoàn thành
            </div>
        </div>
        <div className="history-card-footer">
            <div className="history-price">
                Tổng tiền: <span>400.000đ</span>
            </div>
            <div className="history-actions">
                <button className="history-btn history-btn-primary">
                    <i className="fas fa-download"></i> Tải vé
                </button>
                <button className="history-btn history-btn-secondary">
                    <i className="fas fa-star"></i> Đánh giá
                </button>
            </div>
        </div>
    </div>
  )
}

export default HistoryCard