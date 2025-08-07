import React from 'react'
import foto from '../assets/foto.jpg'
import { motion } from 'framer-motion'
const Acerca = () => {
    return (
        <section id="acerca">
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 m-3 p-4 bg-[#1f1f1f] text-white rounded-lg shadow-lg">
      
          
        
              <img className="rounded-md border-2 border-blue-800 w-48 h-65 object-cover"  src={foto} alt="foto-perfil"  />
          
          
              <motion.p initial={{  scale: 0.95 }}
            animate={{ scale: 1 }}
                    transition={{ duration: 1.0 }}
                    whileHover={ { scale: 1.05 }}
                    className="max-w-xl text-justify  text-amber-100">Hola me llamo Lucas soy estudiante de Análisis de Sistemas en Instituto ORT Argentina,
                  en formación como desarrollador web Full Stack.
Me especializo en frontend con React y tengo conocimientos en backend con Python/Django, además de testing QA manual, bases de datos y herramientas como Git, VSCode y Power BI.
Realicé cursos en Coderhouse, Codo a Codo, Talento Tech y Mindhub, y sigo sumando proyectos personales donde aplico lo aprendido.
Estoy buscando mi primera experiencia IT para seguir creciendo profesionalmente y aportar valor en un equipo de desarrollo.</motion.p>
          </div>
      
          </section>
      
      
      
      
      
      
      
      
      
      
 
 
  
  
  
  
  
  
  
  
  )
}

export default Acerca