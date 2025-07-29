import React from 'react'

const Contacto = () => {
  return (
    <form action="https://formspree.io/f/xjkwddaw" method="post" id="form">
                          
                              
    <legend><b>Datos Personales</b></legend>
    <label htmlFor="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre" required /> 

    <label htmlFor="apellido">Apellido:</label>
    <input type="text" id="apellido" name="apellido" required />

    <label htmlFor="email">e-Mail:</label>
    <input type="email" id="email" name="email" required />


    <label htmlFor="mensaje"> <b>Mensaje:</b></label>
          <textarea name="comentario"
              id="animated"
              required
              placeholder="tu mensaje" cols="40" rows="10"
              >
              
        </textarea>
    <button  type="submit">enviar</button>
    

   </form>
  )
}

export default Contacto