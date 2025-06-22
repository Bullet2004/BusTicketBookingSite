import React from 'react'
import styles from './AdminHomePage.module.css'
import Navbar from '../../../Components/Admin/Navbar/Navbar'
import Sidebar from '../../../Components/Admin/Sidebar/Sidebar'

const AdminHomePage = () => {
  return (
    <>
      <Sidebar />
      <Navbar />
      <div className={styles.container}>
        <div className={styles.row + ' ' + styles.mb4}>
          <div className={styles.colMd3}>
            <div className={styles.statCard}>
              <div className={`${styles.statIcon} ${styles.primary}`}>
                <i className="fas fa-bus"></i>
              </div>
              <div className={styles.statValue}>20</div>
              <div className={styles.statLabel}>Tổng số xe</div>
            </div>
          </div>
          <div className={styles.colMd3}>
            <div className={styles.statCard}>
              <div className={`${styles.statIcon} ${styles.success}`}>
                <i className="fas fa-ticket"></i>
              </div>
              <div className={styles.statValue}>120</div>
              <div className={styles.statLabel}>Vé đã bán</div>
            </div>
          </div>
          <div className={styles.colMd3}>
            <div className={styles.statCard}>
              <div className={`${styles.statIcon} ${styles.warning}`}>
                <i className="fas fa-money-bill-wave"></i>
              </div>
              <div className={styles.statValue}>50M</div>
              <div className={styles.statLabel}>Doanh thu</div>
            </div>
          </div>
          <div className={styles.colMd3}>
            <div className={styles.statCard}>
              <div className={`${styles.statIcon} ${styles.danger}`}>
                <i className="fas fa-comments"></i>
              </div>
              <div className={styles.statValue}>15</div>
              <div className={styles.statLabel}>Phản hồi mới</div>
            </div>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.colMd8}>
            <div className={styles.recentActivity}>
              <h5 className={styles.mb4}>Hoạt động gần đây</h5>

              <div className={`${styles.activityItem} ${styles.dFlex} ${styles.alignItemsCenter}`}>
                <div className={`${styles.activityIcon} ${styles.primary}`}>
                  <i className="fas fa-ticket"></i>
                </div>
                <div>
                  <div className={styles.fwBold}>Đặt vé mới</div>
                  <div className={styles.textMuted}>Khách hàng Nguyễn Văn A đã đặt vé chuyến Hà Nội - Hải Phòng</div>
                  <div className={styles.activityTime}>10 phút trước</div>
                </div>
              </div>

              <div className={`${styles.activityItem} ${styles.dFlex} ${styles.alignItemsCenter}`}>
                <div className={`${styles.activityIcon} ${styles.success}`}>
                  <i className="fas fa-bus"></i>
                </div>
                <div>
                  <div className={styles.fwBold}>Chuyến xe mới</div>
                  <div className={styles.textMuted}>Đã thêm chuyến xe Hồ Chí Minh - Đà Nẵng</div>
                  <div className={styles.activityTime}>30 phút trước</div>
                </div>
              </div>

              <div className={`${styles.activityItem} ${styles.dFlex} ${styles.alignItemsCenter}`}>
                <div className={`${styles.activityIcon} ${styles.warning}`}>
                  <i className="fas fa-money-bill-wave"></i>
                </div>
                <div>
                  <div className={styles.fwBold}>Thanh toán</div>
                  <div className={styles.textMuted}>Đã nhận thanh toán cho chuyến xe số 123</div>
                  <div className={styles.activityTime}>1 giờ trước</div>
                </div>
              </div>

            </div>
          </div>

          <div className={styles.colMd4}>
            <div className={styles.quickActions}>
              <a href="/src/view/admin_view/schedule.html" className={styles.actionCard}>
                <div className={styles.actionIcon}>
                  <i className="fas fa-plus-circle"></i>
                </div>
                <div className={styles.fwBold}>Thêm chuyến xe</div>
              </a>

              <a href="/src/view/admin_view/ticket.html" className={styles.actionCard}>
                <div className={styles.actionIcon}>
                  <i className="fas fa-ticket-alt"></i>
                </div>
                <div className={styles.fwBold}>Quản lý vé</div>
              </a>

              <a href="/src/view/admin_view/revenue.html" className={styles.actionCard}>
                <div className={styles.actionIcon}>
                  <i className="fas fa-chart-bar"></i>
                </div>
                <div className={styles.fwBold}>Xem báo cáo</div>
              </a>

              <a href="/src/view/admin_view/feedback.html" className={styles.actionCard}>
                <div className={styles.actionIcon}>
                  <i className="fas fa-comment-dots"></i>
                </div>
                <div className={styles.fwBold}>Xem phản hồi</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminHomePage
