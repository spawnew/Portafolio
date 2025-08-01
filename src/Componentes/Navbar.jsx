import React from 'react'

const Navbar = () => {
  return (
     
      
         
    <nav className=" w-full bg-[#121212] text-[#e0e0e0] p-4 z-50">
      
          <ul className='flex justify-between items-center bg-[#1f1f1f] text-grey p-2 '>
          <p className='text-center text-gray-600'>Bienvenido a mi portafolio personal</p>
            
      
      <li><button className="bg-blue-600 hover:bg-blue-700 transition duration-300 text-gray-500 py-2 px-4 rounded-md shadow">
      <a href="#acerca" className="hover:text-blue-500">Sobre mi</a>
      </button></li>
      <li><button className="bg-blue-600 hover:bg-blue-700 transition duration-300 text-gray-500 py-2 px-4 rounded-md shadow">
        <a href="#proyectos" className="hover:text-blue-500">Proyectos</a></button></li>
        <li><button className="bg-blue-600 hover:bg-blue-700 transition duration-300 text-gray-500 py-2 px-4 rounded-md shadow">
        <a href="#cursos" className="hover:text-blue-500">Cursos</a></button></li>
      <li><button className="bg-blue-600 hover:bg-blue-700 transition duration-300 text-gray-500 py-2 px-4 rounded-md shadow">
        <a href="#contacto" className="hover:text-blue-500">Contacto</a></button></li>
    </ul>
      
      </nav>
      
      
     
  )
}

export default Navbar