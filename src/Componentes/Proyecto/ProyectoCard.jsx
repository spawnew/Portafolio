import React from 'react'
import { motion } from 'framer-motion'

const ProyectoCard = ({ titulo, descripcion, imagen, url, tecnologia }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ type: 'spring', duration: 1.5 }}
      viewport={{ once: true, amount: 0.3 }}
      className="p-4 bg-gray-900 rounded-2xl h-100 shadow-md flex flex-col 
                 items-center hover:border-blue-900 hover:border-2 
                 hover:shadow-lg hover:scale-105 transition w-90"
    >

     
      <h2 className="text-2xl font-bold mb-3 text-blue-400 text-center">
        {titulo}
      </h2>

     
      <div className="w-full rounded-xl overflow-hidden mb-3">
        <img
          src={imagen}
          className="w-full h-48 object-cover"
          alt={`Imagen del proyecto ${titulo}`}
          loading="lazy"
        />
      </div>

      <p className="text-gray-200 text-center px-2 mb-3">
        {descripcion}
      </p>

      
      <div className="flex flex-row gap-2 pr-2 mb-4">
        {tecnologia.map((tecno, index) => (
          <img
            key={index}
            src={tecno}
            className="w-12 h-12 p-1 rounded-xl bg-gray-800"
            alt="tecnología usada"
            loading="lazy"
          />
        ))}
      </div>

     
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300 font-semibold"
      >
        Ver proyecto →
      </a>

    </motion.div>
  )
}

export default ProyectoCard