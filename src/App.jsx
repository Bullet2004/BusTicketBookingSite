import { useState } from 'react'
import './App.css'
import Header from './Components/Clients/Header/Header'
import BookCard from './Components/Clients/BookCard/BookCard'
import HistoryCard from './Components/Clients/HistoryCard/HistoryCard'
import Footer from './Components/Clients/Footer/Footer'
import Navbar from './Components/Admin/Navbar/Navbar'
import ScheduleCard from './Components/Admin/ScheduleCard/ScheduleCard'
import Sidebar from './Components/Admin/Sidebar/Sidebar'

function App() {

  return (
    <>
      <Navbar/>
      <Sidebar/>
      <ScheduleCard/>
    </>
  )
}

export default App
