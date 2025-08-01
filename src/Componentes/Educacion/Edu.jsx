import React from 'react'
import { motion } from 'framer-motion'
const Edu = ({titulo,institucion,tecnologia="",fecha}) => {
  return (
       <motion.div     initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', duration: 3 }}
      viewport={{ once: true, amount: 0.4 }}
          
          className='p-2 bg-black border border-blue-800 rounded-lg shadow-md flex flex-col justify-center items-center hover:scale-105 o hover:shadow-lg w-90'>
          <p className=' text-gray-500'>{ titulo}</p>
          <p className=' text-gray-600'>{institucion }</p>
          <p className=' text-gray-700'>{fecha }</p>
          <p className=' text-gray-500'>{tecnologia }</p>
    </motion.div>
  )
}

export default Edu