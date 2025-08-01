import React from 'react'

const Redes = ({ nombre, link, imagen }) => {
    return (
        <div >
                <a href={link} >
                <img src={imagen} alt={nombre} />
                <p>{nombre}</p>
            </a>
        </div>
            
        
 
    
    );
};

export default Redes