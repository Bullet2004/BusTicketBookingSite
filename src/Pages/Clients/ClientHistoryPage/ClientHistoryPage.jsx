import React from 'react'
import styles from './ClientHistoryPage.module.css'
import Header from '../../../Components/Clients/Header/Header'
import Footer from '../../../Components/Clients/Footer/Footer'
import HistoryCard from '../../../Components/Clients/HistoryCard/HistoryCard'

const ClientHistoryPage = () => {
  const historyInfos = [
    {
        route: 'Quảng Bình - Đà Nẵng',
        code: '#1',
        dates: '22/06/2025',
        times: '06:00 - 10:30',
        numPeople: 2,
        positions: '2,3',
        status: 'completed',
        total: 3400000
    },
    {
        route: 'Quảng Bình - Huế',
        code: '#2',
        dates: '21/05/2025',
        times: '06:00 - 09:30',
        numPeople: 1,
        positions: '4',
        status: 'pending',
        total: 150000
    },
    {
        route: 'Quảng Bình - Hồ Chí Minh',
        code: '#3',
        dates: '21/05/2025',
        times: '06:00 - 09:30',
        numPeople: 1,
        positions: '5',
        status: 'cancelled',
        total: 1000000
    }
  ]
  return (
    <>
      <Header />
      <section className={styles.historySection}>
        <div className={styles.historyContainer}>
          <div className={styles.historyHeader}>
            <h2>Lịch sử đặt vé</h2>
            <p>Xem lại tất cả các vé xe khách bạn đã đặt và quản lý chúng một cách dễ dàng</p>
          </div>

          <div className={styles.filterContainer}>
            <div className={styles.filterGroup}>
              <label htmlFor="status-filter">Trạng thái:</label>
              <select id="status-filter" className={styles.filterSelect}>
                <option value="all">Tất cả</option>
                <option value="completed">Đã hoàn thành</option>
                <option value="pending">Chờ thanh toán</option>
                <option value="cancelled">Đã hủy</option>
              </select>
            </div>
            <div className={styles.filterGroup}>
              <label htmlFor="time-filter">Thời gian:</label>
              <div className={styles.timeInputGroup}>
                <input type="time" id="time-from" className={styles.timeInput} placeholder="Từ" />
                <span className={styles.timeSeparator}>-</span>
                <input type="time" id="time-to" className={styles.timeInput} placeholder="Đến" />
              </div>
            </div>
            <div className={styles.filterGroup}>
              <label htmlFor="sort-filter">Sắp xếp:</label>
              <select id="sort-filter" className={styles.filterSelect}>
                <option value="newest">Mới nhất</option>
                <option value="oldest">Cũ nhất</option>
                <option value="price-high">Giá cao đến thấp</option>
                <option value="price-low">Giá thấp đến cao</option>
              </select>
            </div>
            <button className={styles.filterBtn}>
              <i className="fas fa-filter"></i> Lọc
            </button>
          </div>

          <div className={styles.historyGrid}>
            {
                historyInfos.map((historyInfo,index)=>(
                    <HistoryCard 
                        route={historyInfo.route} 
                        code={historyInfo.code} 
                        dates={historyInfo.dates} 
                        times={historyInfo.times} 
                        numPeople={historyInfo.numPeople} 
                        positions={historyInfo.positions} 
                        status={historyInfo.status} 
                        total={historyInfo.total}
                    />
                ))
            }
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default ClientHistoryPage
