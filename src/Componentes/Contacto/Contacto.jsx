import React from 'react'

const Contacto = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-[#1f1f1f]
        text-white p-4"> 
            
     
    <form className='flex flex-col justify-center items-cente bg-radial-[at_25%_25%] from-gray-800 to-gray-700 p-3  border-2  border-blue-800 rounded-2xl' action="https://formspree.io/f/xjkwddaw" method="post" id="form">
                          
                              
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
    <button   type="submit">Enviar</button>
    

            </form>
            </div>
  )
}

export default Contacto