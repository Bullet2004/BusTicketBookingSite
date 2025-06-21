import React from 'react'
import styles from './AdminNavbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.mainContent}>
        <nav className={styles.navbar}>
            <div className={styles.containerFluid}>
                <a className={styles.leftNav} href="#">Quản Lý Nhà Xe</a>
                <div className={styles.rightNav}>
                    <ul className={styles.rightNavList}>
                        <li className={styles.navItem}>
                            <a className={styles.navLink} href="#"><i className="fas fa-bell me-2"></i>Thông báo</a>
                        </li>
                        <li className={styles.navItem}>
                            <a className={styles.navLink} href="#"><i className="fas fa-user me-2"></i>Tài khoản</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
