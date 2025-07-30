import React from 'react'
import proyecto from '../../../data'
import ProyectoCard from './ProyectoCard'
const Proyectos = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6 ">
          

 



<div className='w-full text-center text-2xl font-bold text-white mb-6'>
        <h2 className='text-5xl'>Proyectos</h2>
        </div>
          {proyecto.map((proyecto) => (
    <div key={proyecto.id} className='bg-[#1f1f1f]   text-white p-4'>
              <ProyectoCard
                  titulo={proyecto.title}
                  descripcion={proyecto.description}
                  imagen={proyecto.image}
                  tecnologia={proyecto.tecnologia}
                  url={proyecto.url}
              
              />
    </div>
    
          ))}
    </div>
  )
}

export default Proyectos