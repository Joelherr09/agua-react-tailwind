import React from 'react'
import {
    FaFacebookSquare,
    FaInstagram,
    FaTwitterSquare
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-white lg:w-[80%] md:w-[80%] text-black max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8'>
        <div>
            <div className='w-full text-3xl font-bold flex'>        
                <h1 className='text-[#000300]'>AGUA</h1>
            </div>
            <p className='py-2'>Cuéntanos sobre tu negocio y marca, y asesórate con nosotros para potenciar tu negocio!</p>
            <div className='flex justify-between md:w-[75%] my-4'>
                <FaFacebookSquare size={30}/>
                <FaInstagram size={30}/>
                <FaTwitterSquare size={30}/>
            </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6 mx-auto gap-[4rem]'>
            <div>
                <ul className='flex flex-col gap-3'>
                    <li className='py2 text-sm'>Precio</li>
                    <li className='py2 text-sm'>Documentación</li>
                    <li className='py2 text-sm'>Guías</li>
                    <li className='py2 text-sm'>Mantenimiento</li>
                </ul>
            </div>
            <div>
                <ul className='flex flex-col gap-3'>
                    <li className='py2 text-sm'>Precio</li>
                    <li className='py2 text-sm'>Documentación</li>
                    <li className='py2 text-sm'>Guías</li>
                    <li className='py2 text-sm'>Mantenimiento</li>
                </ul>
            </div>

        </div>
    </div>
  )
}

export default Footer