import 'tailwindcss/tailwind.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Properties from './pages/Properties'
import PropertiesDetails from './pages/PropertiesDetails'
import Contact from './pages/Contact'
import Error404 from './pages/Error404';

function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/properties/:id" element={<PropertiesDetails />} />
        <Route path="/ContactUs" element={<Contact />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
