import React, { useState } from 'react';
import styles from './AdminTicketPage.module.css';
import Sidebar from '../../../Components/Admin/Sidebar/Sidebar';
import Navbar from '../../../Components/Admin/Navbar/Navbar';

const bookingsData = [
  { id: 1, name: "Nguyễn Văn A", phone: "0123456789", route: "Tuyến 01: Hà Nội - Hải Phòng", price: "100,000 VND", time: "2025-01-17 08:00:00", status: "pending" },
  { id: 2, name: "Trần Thị B", phone: "0987654321", route: "Tuyến 02: Hà Nội - Nam Định", price: "80,000 VND", time: "2025-01-18 09:30:00", status: "accepted" },
  { id: 3, name: "Phạm Văn C", phone: "0912345678", route: "Tuyến 03: Hà Nội - Ninh Bình", price: "120,000 VND", time: "2025-01-19 10:15:00", status: "pending" },
  { id: 4, name: "Nguyễn Văn A", phone: "0123456789", route: "Tuyến 01: Hà Nội - Hải Phòng", price: "100,000 VND", time: "2025-01-20 08:00:00", status: "pending" },
  { id: 5, name: "Trần Thị B", phone: "0987654321", route: "Tuyến 02: Hà Nội - Nam Định", price: "80,000 VND", time: "2025-02-17 09:30:00", status: "accepted" },
  { id: 6, name: "Phạm Văn C", phone: "0912345678", route: "Tuyến 03: Hà Nội - Ninh Bình", price: "120,000 VND", time: "2025-03-17 10:15:00", status: "pending" },
  { id: 7, name: "Nguyễn Văn A", phone: "0123456789", route: "Tuyến 01: Hà Nội - Hải Phòng", price: "100,000 VND", time: "2025-03-18 08:00:00", status: "pending" },
  { id: 8, name: "Trần Thị B", phone: "0987654321", route: "Tuyến 02: Hà Nội - Nam Định", price: "80,000 VND", time: "2025-02-19 09:30:00", status: "accepted" },
  { id: 9, name: "Phạm Văn C", phone: "0912345678", route: "Tuyến 03: Hà Nội - Ninh Bình", price: "120,000 VND", time: "2025-02-19 10:15:00", status: "pending" },
  { id: 10, name: "Nguyễn Văn A", phone: "0123456789", route: "Tuyến 01: Hà Nội - Hải Phòng", price: "100,000 VND", time: "2025-02-20 08:00:00", status: "pending" },
  { id: 11, name: "Trần Thị B", phone: "0987654321", route: "Tuyến 02: Hà Nội - Nam Định", price: "80,000 VND", time: "2025-01-20 09:30:00", status: "accepted" },
  { id: 12, name: "Phạm Văn C", phone: "0912345678", route: "Tuyến 03: Hà Nội - Ninh Bình", price: "120,000 VND", time: "2025-02-20 10:15:00", status: "pending" },
];

const AdminTicketPage = () => {
  const [bookings, setBookings] = useState(bookingsData);
  const [routeFilter, setRouteFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('');

  const uniqueRoutes = ["Tất cả", ...new Set(bookingsData.map(booking => booking.route))];

  const handleStatusUpdate = (id, newStatus) => {
    const updatedBookings = bookings.map(booking =>
      booking.id === id ? { ...booking, status: newStatus } : booking
    );
    setBookings(updatedBookings);
  };

  const filteredBookings = bookings.filter(booking => {
    const matchRoute = routeFilter === 'all' || booking.route === routeFilter;
    const matchDate = !dateFilter || booking.time.startsWith(dateFilter);
    return matchRoute && matchDate;
  });

  return (
    <>
      <Sidebar />
      <Navbar />
      <div className={styles.mainContent}>
        <div className={styles.container}>
          <h2>Danh sách các yêu cầu đặt vé</h2>

          <div className={styles.filters}>
            <label htmlFor="route-filter">Tuyến đường:</label>
            <select id="route-filter" value={routeFilter} onChange={(e) => setRouteFilter(e.target.value)}>
              {uniqueRoutes.map((route, index) => (
                <option key={index} value={route === 'Tất cả' ? 'all' : route}>{route}</option>
              ))}
            </select>

            <label htmlFor="date-filter">Ngày:</label>
            <input type="date" id="date-filter" value={dateFilter} onChange={(e) => setDateFilter(e.target.value)} />
          </div>
          <div className={styles.tableContainer}>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Họ Tên</th>
                    <th>Số Điện Thoại</th>
                    <th>Tuyến Đường</th>
                    <th>Giá Vé</th>
                    <th>Thời Gian Đặt Vé</th>
                    <th>Trạng Thái</th>
                    <th>Hành Động</th>
                </tr>
                </thead>
                <tbody>
                {filteredBookings.map((booking, index) => (
                    <tr key={booking.id}>
                    <td>{index + 1}</td>
                    <td>{booking.name}</td>
                    <td>{booking.phone}</td>
                    <td>{booking.route}</td>
                    <td>{booking.price}</td>
                    <td>{booking.time}</td>
                    <td className={`${styles.status} ${styles[booking.status]}`}>
                        {booking.status === 'pending' ? 'Đang chờ' :
                        booking.status === 'accepted' ? 'Đã chấp nhận' : 'Đã từ chối'}
                    </td>
                    <td>
                        <button
                        className={styles.acceptBtn}
                        disabled={booking.status !== 'pending'}
                        onClick={() => handleStatusUpdate(booking.id, 'accepted')}
                        >
                        Chấp nhận
                        </button>
                        <button
                        className={styles.rejectBtn}
                        disabled={booking.status !== 'pending'}
                        onClick={() => handleStatusUpdate(booking.id, 'rejected')}
                        >
                        Từ chối
                        </button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminTicketPage;
