import React from 'react'

const Redes = ({ nombre, link, imagen }) => {
    return (
        <div className='flex flex-col items-center justify-center pe-4  hover:scale-105 o hover:shadow-lg w-90'>
                <a href={link} >
                <img className='w-13 h-10 border-2 rounded-md border-blue-800' src={imagen} alt={nombre} />
                <p className='text-gray-500'>{nombre}</p>
            </a>
        </div>
            
        
 
    
    );
};

export default Redes