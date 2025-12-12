import Navbar from './Componentes/Navbar';
import Acerca from './Componentes/Acerca';
import Proyectos from './Componentes/Proyecto/Proyectos';
import Contacto from './Componentes/Contacto/Contacto';
import Sobre from './Componentes/SobreMI/Sobre'
import Skill from './Componentes/Skill/Skill';
function App() {
  

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
