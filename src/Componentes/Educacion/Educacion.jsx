import React from 'react'
import dataEdu from '../../data-edu'
import Edu from './Edu'
const Educacion = () => {
  return (
      <section id="cursos" className="p-6 ">
          <div className='w-full text-center text-2xl font-bold text-white mb-6'>
        <h2 className='text-5xl text-gray-500'>Educación</h2>
        </div>
      <div className=' flex flex-wrap justify-center gap-6 p-6 '>
              
     
              {dataEdu.map((edu) => (
                  <div key={edu.id} className='bg-[#1f1f1f] text-white p-4 mb-4 rounded-lg shadow-md  '>
                      <Edu
                          titulo={edu.titulo}
                          institucion={edu.institucion}
                          fecha={edu.fecha}
                          tecnologia={edu.tecnologia}
                          
                      
                      />
                    
                    
                    </div>
              ))}
              </div>
              </section>
  )
}

export default Educacion