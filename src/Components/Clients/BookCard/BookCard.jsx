import React from 'react'
import './BookCard.css'
import danang from '../../../assets/danang.png';

const BookCard = () => {
  return (
    <div className="route-item">
        <div className="demo-container">
            <img src={danang} alt="" className="demo-image"/>
            <span className="from">Tuyến xe từ</span>
            <span className="from-position">Lệ Thuỷ - Quảng Bình</span>
        </div>
        <div className="route-detail">
            <div className="destination-and-price">
                <span className="destination">Đồng Hới - Quảng Bình</span>
                <span className="price">50.000đ</span>
            </div>
            <span className="during">
                <i className="ti-timer"></i>
                50km - 30 phút</span>
            <button  className="book-btn">Đặt vé</button>
        </div>
    </div>
  )
}

export default BookCard