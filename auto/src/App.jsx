// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Registration from './pages/Registration'
import Benefits from './pages/Benefits'
import Contact from './pages/Contact'



function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <div className="content">
        <Routes>
          <Route path="/" element={   <Home /> } />
          <Route path="/about" element={   <About /> } />
          <Route path="/services" element={   <Services /> } />
          <Route path="/registration" element={   <Registration /> } />
          <Route path="/benefits" element={   <Benefits /> } />
          <Route path="/contact" element={   <Contact /> } />
        </Routes>
      </div>
      
      <Footer />
    </BrowserRouter>
  )
}

export default App