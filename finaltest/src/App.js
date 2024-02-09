import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/HomePage/Home'
import About from './Pages/AboutPage/About'
import Contact from './Pages/ContactPage/Contact'
import Portfolio from './Pages/PortfoliosPage/Portfolio'
import Acheivement from './Pages/Acheivements/Acheivements'
import NoPage from './Pages/NoPage'





export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Acheivement" element={<Acheivement />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}