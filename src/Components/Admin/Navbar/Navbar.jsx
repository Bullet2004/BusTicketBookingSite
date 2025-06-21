import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="main-content">
        <nav className="navbar">
            <div className="container-fluid">
                <a className="left-nav" href="#">Quản Lý Nhà Xe</a>
                <div className="right-nav">
                    <ul className="right-nav-list">
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="fas fa-bell me-2"></i>Thông báo</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="fas fa-user me-2"></i>Tài khoản</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar