import React from 'react'
import { motion } from 'framer-motion'
const ProyectoCard = ({titulo,descripcion,imagen,url,tecnologia}) => {
  return (
      <motion.div initial={{scale:1}}
     className='p-2 bg-black border border-blue-800 rounded-lg shadow-md flex flex-col justify-center items-center hover:scale-105 o hover:shadow-lg w-90'>
          <h2 className='text-2xl font-bold p-1 text-gray-500'> {titulo}</h2>
          <img src={imagen} className='w-80 h-50 p-1 border-1 border-blue-700' alt="foto del proyecto"  />
          <p className='text-gray-600 p-1'>{descripcion}</p>
          <p className='text-gray-600 '>{tecnologia}</p>
          <a href={url} className='text-blue-500 hover:underline'>Ver Proyecto</a>

                   




    </motion.div>
  )
}

export default ProyectoCard