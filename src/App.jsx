import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar.jsx';
import Hero from './components/hero.jsx';
import Slogan from './components/slogan.jsx';
import About_uniswapo from './components/about_uniswapo.jsx';
import Visionmission from './components/visionmission.jsx';
import Why_uniswapo from './components/why_uniswapo.jsx';
import Feedback from './components/feedback.jsx';
import Faqs from './components/faqs.jsx';
import Contact from './components/contact.jsx';
import Footer from './components/footer.jsx';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Hero />
    <Slogan />
    <About_uniswapo />
    <Visionmission />
    <Why_uniswapo />
    <Feedback />
    <Faqs /> 
    <Contact />
    <Footer />
    </>
  )
}

export default App
