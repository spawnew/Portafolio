import Navbar from './Componentes/Navbar';
import Acerca from './Componentes/Acerca';
import Proyectos from './Componentes/Proyecto/Proyectos';
import Contacto from './Componentes/Contacto/Contacto';
import Sobre from './Componentes/SobreMI/Sobre'
import Skill from './Componentes/Skill/Skill';
import AOS from "aos";
import { useEffect } from 'react';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
   

    AOS.init({
      duration:  1000,
      once: true,
    });
  }, []);

  return (
    <>
      
      <Navbar />
      <Acerca />
      <Sobre />
      <Skill/>
      <Proyectos />
      
      <Contacto/>
    
    </>
  )
}

export default App
