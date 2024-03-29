import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";

const Contacto = () => {
  return (
    <div className='w-full py-[6rem] px-4'>
        <div className='max-w-[1240px] bg-[#000300] mx-auto flex flex-col py-8 px-4 md:mx-14 lg:rounded-[2rem] rounded-lg justify-center items-center text-[#40affe]'>
            <h1 className='md:text-4xl text-2xl font-bold my-6 text-center'>¿Necesitas Ayuda?</h1>
            <p className='text-[0.8rem] text-center'>Llámanos y nuestro equipo te ayudará</p>
            <div className='flex bg-[#40affe] rounded-[2rem] my-8 m-4 px-6 py-2 text-black'>
                <div className='flex justify-center items-center px-2'>
                    <FaPhoneAlt/>
                </div>
                <p className='text-bold pl-2'>200 700 600</p>
            </div>
            <p className='text-[0.8rem] text-center'>Nuestro horario de atención es de Lunes a Viernes de 09:00 a 19:00 horas</p>
        </div>
    </div>
  )
}

export default Contacto