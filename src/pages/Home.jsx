import React from "react"
import { motion } from "framer-motion"
import ProdutoCard from "../components/ProdutoCard"

const produtos = [
  {
    nome: "Magma Fruit",
    imagem: "/images/fruta1.jpg",
    preco: "R$ 15,00",
  },
  {
    nome: "Light Fruit",
    imagem: "/images/fruta2.jpg",
    preco: "R$ 20,00",
  },
]

const Home = () => {
  return (
    <div className="pt-24 px-4 text-white">
      {/* Banner principal */}
      <motion.div
        className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="/images/banner.jpg"
          alt="Banner"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-yellow-400 drop-shadow-md">
            As melhores frutas do Blox Fruits!
          </h2>
          <p className="mt-2 md:text-lg text-zinc-200">
            Confiança, qualidade e entrega rápida na sua mão.
          </p>
        </div>
      </motion.div>

      {/* Produtos em destaque */}
      <section className="mt-12 max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold text-yellow-300 mb-6">
          🥭 Produtos em Destaque
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {produtos.map((item, i) => (
            <ProdutoCard key={i} {...item} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
