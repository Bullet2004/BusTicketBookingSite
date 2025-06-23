import React, { useState } from 'react'
import styles from './AdminFeedbackPage.module.css'
import Navbar from '../../../Components/Admin/Navbar/Navbar'
import Sidebar from '../../../Components/Admin/Sidebar/Sidebar'
import avatar from '../../../assets/avatar.jfif'
import ChatBox from '../../../Components/ChatBox/ChatBox'

const AdminFeedbackPage = () => {

    const [chatVisible, setChatVisible] = useState(false)
    const [selectedMessageIndex, setSelectedMessageIndex] = useState(null)

    const [messages, setMessages] = useState([
        {
            avt: avatar,
            name: "Nguyen Van A",
            content: "Tôi gặp vấn đề với đặt vé. A!",
            time: "10:30 AM",
            status: false
        },
        {
            avt: avatar,
            name: "Nguyen Van B",
            content: "Tôi gặp vấn đề với đặt vé. B!",
            time: "10:30 AM",
            status: false
        },
        {
            avt: avatar,
            name: "Nguyen Van C",
            content: "Tôi gặp vấn đề với đặt vé. C!",
            time: "10:30 AM",
            status: true
        }
    ])

    const handleItemClick = (index) => {
        const updatedMessages = [...messages]
        updatedMessages[index].status = true // Đánh dấu đã đọc
        setMessages(updatedMessages)

        setSelectedMessageIndex(index)
        setChatVisible(true)
    }

    return (
        <>
            <Sidebar />
            <Navbar />
            <div className={styles.container}>
                <h2>Phản hồi từ khách hàng</h2>

                <div className={styles.feedbackList} id="feedbackList">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`${styles.feedbackItem} ${!message.status ? styles.unread : ''}`}
                            onClick={() => handleItemClick(index)}
                        >
                            <img src={message.avt} alt="Avatar" />
                            <div className={styles.content}>
                                <span className={styles.name}>{message.name}</span>
                                <span className={styles.message}>{message.content}</span>
                            </div>
                            <span className={styles.timestamp}>{message.time}</span>
                        </div>
                    ))}

                    {chatVisible && (
                        <ChatBox chatVisible={chatVisible} setChatVisible={setChatVisible} message={messages[selectedMessageIndex]}/>
                    )}
                </div>
            </div>
        </>
    )
}

export default AdminFeedbackPage
