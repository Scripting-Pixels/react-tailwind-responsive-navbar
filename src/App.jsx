import { Routes, Route } from "react-router"
import './App.css'
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Header from './components/Header'
import Blog from './components/Blog'
import Footer from "./components/Footer"

function App() {
  return (
    <div 
      className="
        grid min-h-screen grid-rows-[auto_1fr_auto] 
        bg-gradient-to-br from-purple-300 via-blue-100 to-pink-300
      "
    >
      <Header />
      <main>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/contact" element={ <Contact /> } />
          <Route path="/blog" element={ <Blog /> } />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
