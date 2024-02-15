import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/HomePage/Home.jsx'
import { About } from './Pages/AboutPage/About.jsx'
import { Contact } from './Pages/ContactPage/Contact.jsx'
import Portfolio from './Pages/PortfoliosPage/Portfolio.jsx'
import { Achievement } from './Pages/Achievements/Achievement.jsx'


import NoPage from './Pages/NoPage'
import '@fortawesome/fontawesome-free/css/all.css'





export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Achievement" element={<Achievement />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}