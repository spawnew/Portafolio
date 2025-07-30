import React from 'react'

const Contacto = () => {
    return (
      <div className="flex flex-col justify-center items-center "> 
            
     
    <form className='flex flex-col justify-center items-center bg-gray-800 p-3' action="https://formspree.io/f/xjkwddaw" method="post" id="form">
                          
                              
    <legend><b>Datos Personales</b></legend>
    <label className="p-2"htmlFor="nombre">Nombre:</label>
                <input className="bg-amber-50 text-black rounded-md "
                    type="text" id="nombre" name="nombre" required /> 

    <label className="p-2" htmlFor="apellido">Apellido:</label>
                <input className="bg-amber-50 text-black rounded-md"
                    type="text" id="apellido" name="apellido" required />

    <label className="p-2" htmlFor="email">e-Mail:</label>
                <input className="bg-amber-50 text-black rounded-md"
                    type="email" id="email" name="email" required />


    <label className="p-2" htmlFor="mensaje"> <b>Mensaje:</b></label>
          <textarea className="bg-amber-50 text-black rounded-md p-2 " name="comentario"
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