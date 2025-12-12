
const Navbar = () => {
  return (
     
      
       <nav className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md z-50">
  <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
    <h1 className="text-xl font-bold text-blue-400">Lucas Dev</h1>

    <div className="space-x-6 hidden md:flex">
      <a href="#about" className="text-gray-200 hover:text-blue-400">Sobre mí</a>
      <a href="#skills" className="text-gray-200 hover:text-blue-400">Skills</a>
      <a href="#proyectos" className="text-gray-200 hover:text-blue-400">Proyectos</a>
      <a href="#contact" className="text-gray-200 hover:text-blue-400">Contacto</a>
    </div>
  </div>
          </nav>
      
      
     
  )
}

export default Navbar