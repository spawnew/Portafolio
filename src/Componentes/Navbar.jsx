import React from 'react'
import { motion } from 'framer-motion'
const Navbar = () => {
  return (
     
      
         
<nav className=" background-color: #010738; text-[#e0e0e0] p-4 z-50 w-full">
<ul className="flex flex-col items-center gap-4  p-4 sm:flex-row sm:justify-around sm:gap-0">
       
            
          <motion.li
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ type: 'spring', duration: 1.2 }}
  viewport={{ once: true, amount: 0.3 }}
>
  <button className=" hover:bg-black border-b-blue-700 transition duration-300 text-amber-50 py-2 px-4 rounded-md shadow">
    <a href="#acerca" className="hover:text-blue-500">Sobre mí</a>
  </button>
</motion.li>

<motion.li
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ type: 'spring', duration: 1.2 }}
  viewport={{ once: true, amount: 0.3 }}
>
  <button className=" hover:bg-black border-b-blue-700 transition duration-300 text-amber-50 py-2 px-4 rounded-md shadow">
    <a href="#proyectos" className="hover:text-blue-500">Proyectos</a>
  </button>
        </motion.li>
        <motion.li
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ type: 'spring', duration: 1.2 }}
  viewport={{ once: true, amount: 0.3 }}
>
  <button className=" hover:bg-black border-b-blue-700 transition duration-300 text-amber-50 py-2 px-4 rounded-md shadow">
    <a href="#cursos" className="hover:text-blue-500">Cursos</a>
  </button>
</motion.li>

<motion.li
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ type: 'spring', duration: 1.2 }}
  viewport={{ once: true, amount: 0.3 }}
>
  <button className=" hover:bg-black border-b-blue-700 transition duration-300 text-amber-50 py-2 px-4 rounded-md shadow">
    <a href="#contacto" className="hover:text-blue-500">Contacto</a>
  </button>
</motion.li>
    
    
    </ul>
    </nav>
      
      
     
  )
}

export default Navbar