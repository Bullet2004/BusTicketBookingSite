import React, { useState } from 'react'
import styles from './AdminSchedulePage.module.css'
import Navbar from '../../../Components/Admin/Navbar/Navbar'
import Sidebar from '../../../Components/Admin/Sidebar/Sidebar'
import lethuy from '../../../assets/lethuy.jpg'
import danang from '../../../assets/danang.png'
import hcm from '../../../assets/hochiminh.jfif'
import hue from '../../../assets/hue.jpg'
import ScheduleCard from '../../../Components/Admin/ScheduleCard/ScheduleCard'

const AdminSchedulePage = () => {
    const schedules = [
        {
            img: lethuy,
            startPos: 'Lệ Thuỷ - Quảng Bình',
            endPos: 'Đà Nẵng',
            during: '300km - 4 giờ',
            total: 170000 
        },
        {
            img: hue,
            startPos: 'Lệ Thuỷ - Quảng Bình',
            endPos: 'Huế',
            during: '200km - 3giờ',
            total: 100000 
        },
        {
            img: danang,
            startPos: 'Lệ Thuỷ - Quảng Bình',
            endPos: 'Tp Hồ Chí Minh',
            during: '700km - 14giờ',
            total: 1000000 
        },
        {
            img: hcm,
            startPos: 'Lệ Thuỷ - Quảng Bình',
            endPos: 'Đà Nẵng',
            during: '300km - 4 giờ',
            total: 170000 
        },
        {
            img: lethuy,
            startPos: 'Lệ Thuỷ - Quảng Bình',
            endPos: 'Huế',
            during: '200km - 3giờ',
            total: 100000 
        },
        {
            img: hue,
            startPos: 'Lệ Thuỷ - Quảng Bình',
            endPos: 'Tp Hồ Chí Minh',
            during: '700km - 14giờ',
            total: 1000000 
        }
    ]

    const [editModalVisible, setEditModalVisible] = useState(false);
    const [addModalVisible, setAddModalVisible] = useState(false);
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  return (
    <>
      <Sidebar />
      <Navbar />
      <div className={styles.container}>
        <div className={styles.addGroup}>
          <h2>Danh sách chuyến đi</h2>
          <button className={styles.addBtn} onClick={()=>setAddModalVisible(true)}>Thêm mới</button>
        </div>

        <div className={styles.scheduleList}>
            {
                schedules.map((schedule,index)=>(
                    <ScheduleCard img={schedule.img} startPos={schedule.startPos} endPos={schedule.startPos} during={schedule.during} total={schedule.total} setEditModalVisible={setEditModalVisible} setDeleteModalVisible={setDeleteModalVisible}/>
                ))
            }
        </div>
      </div>

    <div className={`${styles.addScheduleModal} ${addModalVisible ? styles.open : ""}`} onClick={() => setAddModalVisible(false)}>
        <div className={styles.addModalContent} onClick={(e)=>e.stopPropagation()}>
          <h2>Thêm Chuyến Xe</h2>
          <form>
            <label htmlFor="image">Ảnh:</label>
            <input type="file" id="image" name="image" accept="image/*" />

            <label htmlFor="departure">Xuất phát:</label>
            <input type="text" id="departure" name="departure" placeholder="Nhập điểm xuất phát" />

            <label htmlFor="destination">Điểm đến:</label>
            <input type="text" id="destination" name="destination" placeholder="Nhập điểm đến" />

            <label htmlFor="distance">Quãng đường (km):</label>
            <input type="number" id="distance" name="distance" placeholder="Nhập quãng đường" />

            <label htmlFor="time">Thời gian:</label>
            <input type="time" id="time" name="time" />

            <label htmlFor="price">Giá tiền (VND):</label>
            <input type="number" id="price" name="price" placeholder="Nhập giá tiền" />

            <div className={styles.actions}>
              <button type="button" className={styles.cancel} onClick={() => setAddModalVisible(false)}>Hủy</button>
              <button type="submit">Thêm</button>
            </div>
          </form>
        </div>
      </div>

    <div className={`${styles.editScheduleModal} ${editModalVisible ? styles.open : ""}`} onClick={() => setEditModalVisible(false)}>
        <div className={styles.editModalContent} onClick={(e)=>e.stopPropagation()}>
          <h2>Thêm Chuyến Xe</h2>
          <form>
            <label htmlFor="image">Ảnh:</label>
            <input type="file" id="image" name="image" accept="image/*" />

            <label htmlFor="departure">Xuất phát:</label>
            <input type="text" id="departure" name="departure" placeholder="Nhập điểm xuất phát" />

            <label htmlFor="destination">Điểm đến:</label>
            <input type="text" id="destination" name="destination" placeholder="Nhập điểm đến" />

            <label htmlFor="distance">Quãng đường (km):</label>
            <input type="number" id="distance" name="distance" placeholder="Nhập quãng đường" />

            <label htmlFor="time">Thời gian:</label>
            <input type="time" id="time" name="time" />

            <label htmlFor="price">Giá tiền (VND):</label>
            <input type="number" id="price" name="price" placeholder="Nhập giá tiền" />

            <div className={styles.actions}>
              <button type="button" className={styles.cancel} onClick={() => setEditModalVisible(false)}>Hủy</button>
              <button type="submit">Xác nhận</button>
            </div>
          </form>
        </div>
      </div>

    <div className={`${styles.deleteModal} ${deleteModalVisible ? styles.open : ""}`} onClick={() => setDeleteModalVisible(false)}>
        <div className={styles.modalContent} onClick={(e)=>e.stopPropagation()}>
          <p>Bạn có chắc chắn muốn xóa?</p>
          <div className={styles.modalButtons}>
            <button type="button" className={styles.cancel} onClick={() => setDeleteModalVisible(false)}>Hủy</button>
            <button className={styles.btnDelete} id="confirmDeleteBtn">Xác nhận</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminSchedulePage
