import React from 'react'
import styles from './Sidebar.module.css'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
        <h3>Nhà Xe</h3>
        <NavLink to="/admin" end className={({ isActive }) => `${styles.sidebarItem} ${isActive ? styles.active : ''}`}>
            <i className="fa-solid fa-house"></i>
            Trang chủ
        </NavLink>
        <NavLink to="/admin/schedule" className={({ isActive }) => `${styles.sidebarItem} ${isActive ? styles.active : ''}`}>
            <i className="fa-solid fa-bus"></i>
            Chuyến đi
        </NavLink>
        <NavLink to="/admin/ticket" className={({ isActive }) => `${styles.sidebarItem} ${isActive ? styles.active : ''}`}>
            <i className="fa-solid fa-ticket"></i>
            Đặt vé
        </NavLink>
        <NavLink to="/admin/revenue" className={({ isActive }) => `${styles.sidebarItem} ${isActive ? styles.active : ''}`}>
            <i className="fa-solid fa-chart-line"></i>
            Doanh thu
        </NavLink>
        <NavLink to="/admin/feedback" className={({ isActive }) => `${styles.sidebarItem} ${isActive ? styles.active : ''}`}>
            <i className="fa-solid fa-comments"></i>
            Phản hồi
        </NavLink>
    </div>
  )
}

export default Sidebar
