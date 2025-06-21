import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
        <h3>Nhà Xe</h3>
        <a href="/src/view/admin_view/index.html" className="sidebar-item active">
            <i className="fa-solid fa-house"></i>
            Trang chủ
        </a>
        <a href="/src/view/admin_view/schedule.html" className="sidebar-item">
            <i className="fa-solid fa-bus"></i>
            Chuyến đi
        </a>
        <a href="/src/view/admin_view/ticket.html" className="sidebar-item">
            <i className="fa-solid fa-ticket"></i>
            Đặt vé
        </a>
        <a href="/src/view/admin_view/revenue.html" className="sidebar-item">
            <i className="fa-solid fa-chart-line"></i>
            Doanh thu
        </a>
        <a href="/src/view/admin_view/feedback.html" className="sidebar-item">
            <i className="fa-solid fa-comments"></i>
            Phản hồi
        </a>
    </div>
  )
}

export default Sidebar