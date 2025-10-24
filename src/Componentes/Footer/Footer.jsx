
import Redes from './Redes'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.jpeg'
import cv from '../../assets/cv.JPG'
const Footer = () => {
  return (
    <div className=' flex justify-center items-center  text-grey p-1'>
      <Redes
        nombre="Github"
        link="https://github.com/spawnew"
      imagen={github}
      />
         <Redes
        nombre="LinkedIn"
        link="https://www.linkedin.com/in/lucas-sorzio"
      imagen={linkedin}
      />
         <Redes
        nombre="CV"
        link="https://drive.google.com/file/d/19PxlkNAnVDpApiQW7hGxckIgzKJqFqje/view?usp=drive_link"
      imagen={cv}
      />
    </div>
  )
}

export default Footer