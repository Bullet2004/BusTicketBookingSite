import React, { useState, useEffect } from 'react'
import styles from './ChatBox.module.css'

const ChatBox = ({ chatVisible, setChatVisible, message }) => {

  const [inputMessage, setInputMessage] = useState('')
  const [chatMessages, setChatMessages] = useState([])

  useEffect(() => {
    if (message) {
      setChatMessages([{ sender: 'customer', content: message.content }])
    }
  }, [message])

  const sendMessage = () => {
    if (inputMessage.trim() === '') return

    const newMessage = { sender: 'admin', content: inputMessage }
    setChatMessages(prevMessages => [...prevMessages, newMessage])
    setInputMessage('')

    setTimeout(() => {
      const chatBox = document.getElementById('chatContent')
      if (chatBox) {
        chatBox.scrollTop = chatBox.scrollHeight
      }
    }, 0)
  }

  return (
    <div className={`${styles.chatBox} ${chatVisible ? styles.open : ''}`} id="chatBox">
      <div className={styles.chatHeader} id="chatHeader">
        <img src={message.avt} alt="Avatar" className={styles.avatar} />
        <span id="customerName">{message.name}</span>
        <i className={`fa-solid fa-x ${styles.closeChat}`} onClick={() => setChatVisible(false)}></i>
      </div>

      <div className={styles.chatContent} id="chatContent">
        {chatMessages.map((msg, index) => (
          <div
            key={index}
            className={`${styles.messageItem} ${msg.sender === 'customer' ? styles.customer : styles.admin}`}
          >
            {msg.content}
          </div>
        ))}
      </div>

      <div className={styles.chatInput}>
        <input
          type="text"
          id="chatMessage"
          placeholder="Nhập tin nhắn..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') sendMessage() }}
        />
        <button onClick={sendMessage}>
          <i className="fa-regular fa-paper-plane"></i>
        </button>
      </div>
    </div>
  )
}

export default ChatBox
