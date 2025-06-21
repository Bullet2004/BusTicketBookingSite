import { useState } from 'react'
import './App.css'
import Header from './Components/Clients/Header/Header'
import BookCard from './Components/Clients/BookCard/BookCard'
import HistoryCard from './Components/Clients/HistoryCard/HistoryCard'
import Footer from './Components/Clients/Footer/Footer'

function App() {

  return (
    <>
      <Header/>
      <BookCard/>
      <HistoryCard/>
      <Footer/>
    </>
  )
}

export default App
