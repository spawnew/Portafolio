import React from 'react'

const ProyectoCard = ({titulo,descripcion,imagen,url,tecnologia}) => {
  return (
      <div  className='p-2 bg-black border rounded-lg shadow-md flex flex-col justify-center items-center'>
          <h2 className='text-2xl font-bold p-1'>{titulo}</h2>
          <img src={imagen} className='w-80 h-50 p-1' alt="foto del proyecto"  />
          <p className='text-gray-600 p-1'>{descripcion}</p>
          <p className='text-gray-600 '>{tecnologia}</p>
          <a href={url} className='text-blue-500 hover:underline'>Ver Proyecto</a>

                   




    </div>
  )
}

export default ProyectoCard