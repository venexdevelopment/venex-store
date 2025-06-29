import React from "react"
import { motion } from "framer-motion"

const ProdutoCard = ({ nome, imagem, preco }) => {
  return (
    <motion.div
      className="bg-zinc-900 rounded-2xl overflow-hidden shadow-md hover:shadow-yellow-400/20 transition-all duration-300"
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <img src={imagem} alt={nome} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h4 className="text-lg font-semibold text-yellow-300">{nome}</h4>
        <p className="text-sm text-zinc-300 mt-1">{preco}</p>
        <button className="mt-3 bg-yellow-400 text-black font-bold py-1 px-4 rounded-lg hover:bg-yellow-300 transition-colors duration-200">
          Comprar
        </button>
      </div>
    </motion.div>
  )
}

export default ProdutoCard
