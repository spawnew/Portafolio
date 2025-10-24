import React from 'react'
import proyecto from '../../../data'
import ProyectoCard from './ProyectoCard'
import { motion } from 'framer-motion'
const Proyectos = () => {
  return (
    <section id="proyectos" >
    <div className="flex flex-wrap justify-center gap-6 p-6 ">
          

 



<div className='w-full text-center text-2xl font-bold text-gray-500 mb-6'>
        <h2 className='text-5xl text-gray-300'>Proyectos</h2>
        </div>
          {proyecto.map((proyecto) => (
     <motion.div 
    initial={{scale:1}}
   key={proyecto.id} className='  text-white p-4'>
              <ProyectoCard
                  titulo={proyecto.title}
                  descripcion={proyecto.description}
                  imagen={proyecto.image}
                  tecnologia={proyecto.tecnologia}
                  url={proyecto.url}
              
              />
    </motion.div>
    
          ))}
    </div>
    </section>
  )
}

export default Proyectos