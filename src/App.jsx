import 'tailwindcss/tailwind.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Properties from './pages/Properties'
import PropertiesDetails from './pages/PropertiesDetails'
import Services from './pages/Services'

function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/properties/:id" element={<PropertiesDetails />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
