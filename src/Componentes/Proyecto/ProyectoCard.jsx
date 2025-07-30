import React from 'react'

const ProyectoCard = ({titulo,descripcion,imagen,url}) => {
  return (
      <div  className='p-4 bg-black border rounded-lg shadow-md flex flex-col justify-center items-center'>
          <h2 className='text-2xl font-bold'>{titulo}</h2>
          <img src={imagen} className='w-50' alt="foto del proyecto"  />
          <p className='text-gray-600'>{descripcion}</p>
          <a href={url} className='text-blue-500 hover:underline'>Ver Proyecto</a>

                   




    </div>
  )
}

export default ProyectoCard