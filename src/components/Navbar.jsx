import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-5 text-black'>
        <div className='w-full text-3xl font-bold flex'>        
            <h1 className='text-[#000300]'>AGUA</h1>
        </div>
        <ul className='hidden md:flex'>
            <li className='p-4'>Inicio</li>
            <li className='p-4'>Oferta</li>
            <li className='p-4'>Nosotros</li>
            <li className='p-4'>Contacto</li>
        </ul>


        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
            
        </div>


        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#40affe] ease-in-out duration-500' : 'fixed left-[-100%]'}>

        <div className='w-full text-3xl font-bold flex m-4'>        
            <h1 className='text-[#000300]'>AGUA</h1>
        </div>
            <ul className='p-4 uppercase'>
                <li className='p-4 border-b border-gray-600'>Inicio</li>
                <li className='p-4 border-b border-gray-600'>Oferta</li>
                <li className='p-4 border-b border-gray-600'>Nosotros</li>
                <li className='p-4'>Contacto</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar