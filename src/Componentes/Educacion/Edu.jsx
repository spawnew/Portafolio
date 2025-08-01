import React from 'react'

const Edu = ({titulo,institucion,tecnologia="",fecha}) => {
  return (
      <div className='p-2 bg-black border border-blue-800 rounded-lg shadow-md flex flex-col justify-center items-center hover:scale-105 o hover:shadow-lg w-90'>
          <p className=' text-gray-500'>{ titulo}</p>
          <p className=' text-gray-600'>{institucion }</p>
          <p className=' text-gray-700'>{fecha }</p>
          <p className=' text-gray-500'>{tecnologia }</p>
    </div>
  )
}

export default Edu