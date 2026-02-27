import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Navbar } from './Pages/Navbar'
import { About } from './Pages/About'
import { Services } from './Pages/Services'
import { Contact } from './Pages/Contact'

/**
 * Main Application Component
 * 
 * Handles routing and layout for the entire application
 * Navigation structure:
 * - / (Home page)
 * - /about (About page)
 * - /services (Services page)
 * - /contact (Contact page)
 */
function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </>
  )
}

export default App

