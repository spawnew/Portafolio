import Navbar from './Componentes/Navbar';
import Acerca from './Componentes/Acerca';
import Proyectos from './Componentes/Proyecto/Proyectos';
import Contacto from './Componentes/Contacto/Contacto';
import Footer from './Componentes/Footer/Footer';
import Educacion from './Componentes/Educacion/Educacion';
function App() {
  

  return (
    <>
      
      <Navbar />
       <Acerca/>
      <Proyectos />
      <Educacion/>
      <Contacto/>
     <Footer/>
    </>
  )
}

export default App
