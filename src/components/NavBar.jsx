import React, { useState, useEffect } from 'react'
import Logo from '../assets/img/logo.svg'
import { SlMenu } from 'react-icons/sl'

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])
  return (
    <nav className={scrolled ? 'scrolled' : 'p-5 m-5'}>
      <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row items-center'>
          <div className='w-full md:w-7/12 flex flex-col items-center'>
            {/* <img className='md:w-1' src={Logo} alt='logo' /> */}
          </div>
          <div className='w-full md:w-7/12 flex flex-col items-center'>
            <span className='flex text-center items-center justify-between m-4'>
              <ul className={`flex ${menuOpen ? 'block' : 'hidden'} sm:flex`}>
                <li className='text-white font-montserrat tracking-wide hover:tracking-wider p-2'>
                  Home
                </li>
                <li className='text-white font-montserrat tracking-wide hover:tracking-wider p-2'>
                  Skills
                </li>
                <li className='text-white font-montserrat tracking-wide hover:tracking-wider p-2'>
                  Projects
                </li>
                <button className='border-white rounded-none border-2 p-2 text-white font-montserrat'>
                  <span>Let's connect</span>
                </button>
              </ul>
              <button
                className='sm:hidden border-white rounded-none border-2 p-2 text-white font-montserrat'
                onClick={toggleMenu}
              >
                <SlMenu />
              </button>
            </span>
          </div>
        </div>
      </div>
    </nav>
  )
}
