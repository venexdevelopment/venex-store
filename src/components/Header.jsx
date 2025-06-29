import React from "react"
import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"

const Header = () => {
  const location = useLocation()

  const linkClasses = (path) =>
    `transition-all duration-200 hover:text-yellow-400 ${
      location.pathname === path ? "text-yellow-400 font-semibold" : "text-white"
    }`

  return (
    <motion.header
      className="w-full bg-zinc-950/80 backdrop-blur-md shadow-md fixed top-0 left-0 z-50"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold text-yellow-400 tracking-wide">
          Venex Store's
        </h1>

        <nav className="flex gap-6 text-lg">
          <Link to="/" className={linkClasses("/")}>Início</Link>
          <Link to="/cassino" className={linkClasses("/cassino")}>Cassino</Link>
        </nav>
      </div>
    </motion.header>
  )
}

export default Header
