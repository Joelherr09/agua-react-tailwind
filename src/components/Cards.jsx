import React from 'react'
import Agua from '../assets/12-litros.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4'>
        <div className='max-w-[1240px] lg:w-[60%] md:w-[90%] sm:w-[100%] w-[80%] mx-auto grid md:grid-cols-3 sm:grid-cols-3 gap-8'>
            <div className='w-full border flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-40 mx-auto' src={Agua} alt="/" />
                <h2 className='text-1xl font-bold text-center py-4'>Pack Botellón 12 Litros</h2>
                <div className='flex justify-between'>
                    <div className='flex flex-col justify-center'>
                        <p className='text-[0.8rem] text-center text-gray'>Hasta</p>
                        <p className='text-bold text-center'>$10.000</p>
                    </div>
                    <button className='bg-[#40affe] text-[#000300] text-[0.7rem] rounded-[2rem] px-6 h-8 my-auto hover:bg-[#4b81a8]'>Comprar</button>
                </div>
            </div>

            <div className='w-full border flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-40 mx-auto' src={Agua} alt="/" />
                <h2 className='text-1xl font-bold text-center py-4'>Pack Botellón 12 Litros</h2>
                <div className='flex justify-between'>
                    <div className='flex flex-col justify-center'>
                        <p className='text-[0.8rem] text-center text-gray'>Hasta</p>
                        <p className='text-bold text-center'>$10.000</p>
                    </div>
                    <button className='bg-[#40affe] text-[#000300] text-[0.7rem] rounded-[2rem] px-6 h-8 my-auto hover:bg-[#4b81a8]'>Comprar</button>
                </div>
            </div>

            <div className='w-full border flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-40 mx-auto' src={Agua} alt="/" />
                <h2 className='text-1xl font-bold text-center py-4'>Pack Botellón 12 Litros</h2>
                <div className='flex justify-between'>
                    <div className='flex flex-col justify-center'>
                        <p className='text-[0.8rem] text-center text-gray'>Hasta</p>
                        <p className='text-bold text-center'>$10.000</p>
                    </div>
                    <button className='bg-[#40affe] text-[#000300] text-[0.7rem] rounded-[2rem] px-6 h-8 my-auto hover:bg-[#4b81a8]'>Comprar</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards