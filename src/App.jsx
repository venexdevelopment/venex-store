import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Cassino from "./pages/Cassino"
import Header from "./components/Header"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div className="bg-zinc-900 text-white min-h-screen flex flex-col font-sans">
      <Router>
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cassino" element={<Cassino />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  )
}

export default App
