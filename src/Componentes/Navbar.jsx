import React from 'react'
import { motion } from 'framer-motion'
const Navbar = () => {
  return (
     
      
         
    <nav className=" w-full bg-[#121212] text-[#e0e0e0] p-4 z-50">
      
      <ul className='flex justify-between items-center bg-[#1f1f1f] text-grey p-2 '>
          <p className='text-center text-gray-600'>Bienvenido a mi portafolio personal</p>
            
      
        <motion.li initial={{ opacity: 0, y: 10, x:10 }}
             whileInView={{ opacity: 1, y: 0, x:0 }}
             transition={{ type: 'spring', duration: 2 }}
             viewport={{ once: true, amount: 0.4 }}
        ><button className="bg-blue-600 hover:bg-blue-700 transition duration-300 text-gray-500 py-2 px-4 rounded-md shadow">
      <a href="#acerca" className="hover:text-blue-500">Sobre mi</a>
      </button></motion.li>
         <motion.li initial={{ opacity: 0, y: 10, x:10 }}
             whileInView={{ opacity: 1, y: 0, x:0 }}
             transition={{ type: 'spring', duration: 2 }}
             viewport={{ once: true, amount: 0.4 }}
        ><button className="bg-blue-600 hover:bg-blue-700 transition duration-300 text-gray-500 py-2 px-4 rounded-md shadow">
            <a href="#proyectos" className="hover:text-blue-500">Proyectos</a></button></motion.li>
        
            <motion.li initial={{ opacity: 0, y: 10, x:10 }}
             whileInView={{ opacity: 1, y: 0, x:0 }}
             transition={{ type: 'spring', duration: 2 }}
             viewport={{ once: true, amount: 0.4 }}><button className="bg-blue-600 hover:bg-blue-700 transition duration-300 text-gray-500 py-2 px-4 rounded-md shadow">
            <a href="#cursos" className="hover:text-blue-500">Cursos</a></button></motion.li>
    
            <motion.li initial={{ opacity: 0, y: 10, x:10 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
             transition={{ type: 'spring', duration: 2 }}
             viewport={{ once: true, amount: 0.4 }}><button className="bg-blue-600 hover:bg-blue-700 transition duration-300 text-gray-500 py-2 px-4 rounded-md shadow">
            <a href="#contacto" className="hover:text-blue-500">Contacto</a></button></motion.li>
    
   
   
   
   
      </ul>
      
      </nav>
      
      
     
  )
}

export default Navbar