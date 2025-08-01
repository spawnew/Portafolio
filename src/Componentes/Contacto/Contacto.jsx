
import { motion } from 'framer-motion'

const Contacto = () => {
  return (
    <section id="contacto" className="py-10 ">
      <div className="flex flex-col justify-center items-center text-white px-4">
        <motion.form
          
                  initial={{ opacity: 0, y: 50, x:50 }}
                  whileInView={{ opacity: 1, y: 0, x:0 }}
                  transition={{ type: 'spring', duration: 3 }}
                  viewport={{ once: true, amount: 0.4 }}
          action="https://formspree.io/f/xjkwddaw"
          method="post"
          id="form"
          className="w-full max-w-md bg-black text-gray-200 mb-4 shadow-lg flex flex-col space-y-3 p-6 rounded-2xl border border-blue-800"
        >
          <legend className="text-lg font-bold mb-2 text-center">
            Si deseas que desarrollemos juntos
          </legend>

          <label htmlFor="nombre">Nombre:</label>
          <input
            className="bg-amber-50 text-black rounded-md px-2 py-1 border border-black"
            type="text"
            id="nombre"
            name="nombre"
            required
          />

          <label htmlFor="apellido">Apellido:</label>
          <input
            className="bg-amber-50 text-black rounded-md px-2 py-1 border border-black"
            type="text"
            id="apellido"
            name="apellido"
            required
          />

          <label htmlFor="email">e-Mail:</label>
          <input
            className="bg-amber-50 text-black rounded-md px-2 py-1 border border-black"
            type="email"
            id="email"
            name="email"
            required
          />

          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            className="bg-amber-50 text-black rounded-md px-2 py-2 border border-black"
            name="comentario"
            id="mensaje"
            placeholder="Escribí tu mensaje..."
            cols="30"
            rows="6"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-semibold transition-all"
          >
            Enviar
          </button>
        </motion.form>
      </div>
    </section>
  )
}

export default Contacto