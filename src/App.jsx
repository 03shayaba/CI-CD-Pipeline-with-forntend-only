import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home'
import Navbar from './Components/Navbar.jsx'
import Hero from './Pages/Hero.jsx';
import AboutPage from './Pages/AboutPage.jsx';
import Footer from './Components/Footer.jsx';
import ContactPage from './Pages/ContactPage.jsx';
import Streaming_2page from './Pages/Streaming_2page.jsx';
import { Streaming_3page } from './Pages/Streaming_2page.jsx';
import { Streaming_page1 } from './Pages/Streaming_2page.jsx';
import { Streaming_4page } from './Pages/Streaming_2page.jsx';
import './index.css'
import {Blog_page} from './Pages/Blog_page.jsx';
import {Details} from './Pages/Blog_page.jsx';
import {NewPage} from './Pages/NewPage.jsx';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div >
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
           <Route path="/about" element={<AboutPage />} />
           <Route path="/streaming1" element={<Streaming_page1 />} />
          <Route path="/streaming2" element={<Streaming_2page />} />
          <Route path="/streaming3" element={<Streaming_3page />} />
          <Route path="/streaming4" element={<Streaming_4page />} />
          <Route path="/signuppages" element={<NewPage />} />
          <Route path="/blog" element={<Blog_page />} /> 
          <Route path="/blog-details" element={<Details />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
       <Footer />
    </div>
  )
}



export default App
