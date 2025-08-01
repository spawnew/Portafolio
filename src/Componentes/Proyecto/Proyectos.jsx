import React from 'react'
import proyecto from '../../../data'
import ProyectoCard from './ProyectoCard'
import { motion } from 'framer-motion'
const Proyectos = () => {
  return (
    <section id="proyectos" >
    <div className="flex flex-wrap justify-center gap-6 p-6 ">
          

 



<div className='w-full text-center text-2xl font-bold text-white mb-6'>
        <h2 className='text-5xl'>Proyectos</h2>
        </div>
          {proyecto.map((proyecto) => (
     <motion.div 
    initial={{scale:1}}
    whileHover={{ scale: 1.05 }}
    whileInView={{ opacity: 1000 }} key={proyecto.id} className='bg-[#1f1f1f]   text-white p-4'>
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