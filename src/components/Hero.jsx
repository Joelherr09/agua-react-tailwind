import React from 'react'
import hero from '../assets/agua-hero.jpg'
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className='w-full py-3 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <div className='flex flex-col justify-center'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl py-2 uppercase font-bold'>Experiencia de sabor puro</h1>
                <p>Elige Agua, agua purificada, libre de sodio y cloro! Es la única agua chilena que cuenta consecutivamente con el Premio Superior Taste Award 2017 - 2019 a 2023</p>
                <button className='bg-[#000300] w-[200px] rounded-[2rem] font-medium my-6 mx-auto py-3 text-[#40affe] flex items-center justify-center gap-2'>Conoce más <FaArrowRightLong/></button>
            </div>
            <img className='w-[500px] mx-auto my-4 rounded-md' src={hero} alt="/" />
        </div>
    </div>
  )
}

export default Hero