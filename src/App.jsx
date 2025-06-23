import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './Components/Clients/Header/Header'
import BookCard from './Components/Clients/BookCard/BookCard'
import HistoryCard from './Components/Clients/HistoryCard/HistoryCard'
import Footer from './Components/Clients/Footer/Footer'
import Navbar from './Components/Admin/Navbar/Navbar'
import ScheduleCard from './Components/Admin/ScheduleCard/ScheduleCard'
import Sidebar from './Components/Admin/Sidebar/Sidebar'
import Login from './Pages/Common/Login/Login'
import Signup from './Pages/Common/Signup/Signup'
import ClientHomePage from './Pages/Clients/ClientHomePage/ClientHomePage'
import ClientIntroductionPage from './Pages/Clients/ClientIntroductionPage/ClientIntroductionPage'
import ClientContactPage from './Pages/Clients/ClientContactPage/ClientContactPage'
import ClientHistoryPage from './Pages/Clients/ClientHistoryPage/ClientHistoryPage'
import AdminHomePage from './Pages/Admin/AdminHomePage/AdminHomePage';
import AdminSchedulePage from './Pages/Admin/AdminSchedulePage/AdminSchedulePage';
import AdminTicketPage from './Pages/Admin/AdminTicketPage/AdminTicketPage';
import AdminRevenuePage from './Pages/Admin/AdminRevenuePage/AdminRevenuePage';
import AdminFeedbackPage from './Pages/Admin/AdminFeedbackPage/AdminFeedbackPage';

function App() {
  return (
      <Routes>
        <Route path="/" element={<ClientHomePage />} />
        <Route path="/about" element={<ClientIntroductionPage />} />
        <Route path="/contact" element={<ClientContactPage />} />
        <Route path="/history" element={<ClientHistoryPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/admin" element={<AdminHomePage />} />
        <Route path="/admin/schedule" element={<AdminSchedulePage />} />
        <Route path="/admin/ticket" element={<AdminTicketPage />} />
        <Route path="/admin/revenue" element={<AdminRevenuePage />} />
        <Route path="/admin/feedback" element={<AdminFeedbackPage />} />
      </Routes>
  )
}

export default App
