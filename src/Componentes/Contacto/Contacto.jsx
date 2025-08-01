import React from 'react'

const Contacto = () => {
    return (
        <section id="contacto">
        <div className="flex flex-col justify-center items-center  text-white p-4 "> 
            
     
    <form className='bg-black text-gray-500  mb-4  shadow-md flex flex-col justify-center items-center  p-3 pb-1  border-2  border-blue-800 rounded-2xl' action="https://formspree.io/f/xjkwddaw" method="post" id="form">
                          
                              
    <legend><b>Si desean que desarrollemos juntos</b></legend>
    <label className="p-2"htmlFor="nombre">Nombre:</label>
                <input className="bg-amber-50 text-black rounded-md border-3 border-black "
                    type="text" id="nombre" name="nombre" required /> 

    <label className="p-2" htmlFor="apellido">Apellido:</label>
                <input className="bg-amber-50 text-black rounded-md border-3 border-black"
                    type="text" id="apellido" name="apellido" required />

    <label className="p-2" htmlFor="email">e-Mail:</label>
                <input className="bg-amber-50 text-black rounded-md border-3 border-black"
                    type="email" id="email" name="email" required />


    <label className="p-2" htmlFor="mensaje"> <b>Mensaje:</b></label>
          <textarea className="bg-amber-50 text-black rounded-md p-2 border-3 border-black" name="comentario"
              id="animated"
              required
              placeholder="Escriba un mensajito" cols="40" rows="10"
              >
              
        </textarea>
    <button    type="submit">Enviar</button>
    

            </form>
            </div>
            </section>
  )
}

export default Contacto