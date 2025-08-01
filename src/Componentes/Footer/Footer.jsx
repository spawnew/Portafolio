import React from 'react'
import { motion } from 'framer-motion'
import Redes from './Redes'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.jpeg'
const Footer = () => {
  return (
    <div className=' flex justify-center items-center bg-[#1f1f1f] text-grey p-2'>
      <Redes
        nombre="Github"
        link="https://github.com/spawnew"
      imagen={github}
      />
         <Redes
        nombre="LinkedIn"
        link="https://www.linkedin.com/in/lucas-sorzio-4a1bb1238/"
      imagen={linkedin}
      />
    </div>
  )
}

export default Footer