import React from 'react'

const Redes = ({ nombre, link, imagen }) => {
    return (
        <div className='flex flex-col items-center justify-center p-1  hover:scale-105 o hover:shadow-lg w-70 '>
                <a href={link} >
                <img className='w-10 h-8  rounded-md ' src={imagen} alt={nombre} />
                <p className='text-gray-500'>{nombre}</p>
            </a>
        </div>
            
        
 
    
    );
};

export default Redes