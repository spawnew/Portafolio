
import { motion } from 'framer-motion'

const Contacto = () => {
  return (
     <section id="contact" className="bg-black py-20 px-6 text-center">
  <h2 className="text-3xl font-bold text-blue-400 mb-6">Contacto</h2>

  <p className="text-gray-300 mb-6">
    ¿Te gustaría que trabajemos juntos? Estoy disponible para proyectos y oportunidades laborales.
  </p>

  <div className="space-y-2 text-gray-300">
    <p>Email: <span className="text-blue-400">sorziolucas4@gmail.com</span></p>
    <p>GitHub: <a className="text-blue-400 underline" href="https://github.com/spawnew">Link</a></p>
        <p>LinkedIn: <a className="text-blue-400 underline" href="https://www.linkedin.com/in/lucas-sorzio">Link</a></p>
        <p>Cv: <a className="text-blue-400 underline" href="https://drive.google.com/file/d/19PxlkNAnVDpApiQW7hGxckIgzKJqFqje/view?usp=drive_link">Link</a></p>
  </div>
</section>
  )
}

export default Contacto