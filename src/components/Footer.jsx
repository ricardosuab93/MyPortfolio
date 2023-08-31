import React from 'react'
import Logo from '../assets/img/logo.svg'
import footerIcon1 from '../assets/img/nav-icon1.svg'
import footerIcon2 from '../assets/img/nav-icon2.svg'
import footerIcon3 from '../assets/img/nav-icon3.svg'
import { SlSocialLinkedin } from 'react-icons/sl'
import { SlSocialInstagram } from 'react-icons/sl'
import { SlSocialGithub } from 'react-icons/sl'

export const Footer = () => {
  return (
    <section className='footer' id='footer'>
      <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row items-center'>
          <div className='w-full md:w-7/12'>
            {/* <img src={Logo} alt='logoFooter' /> */}
          </div>
          <div className='w-full md:w-7/12'>
            <div className='flex flex-row items-center justify-center p-2 m-2'>
              <a className='border-2 rounded-full m-3 p-3 bg-gray-700 hover:bg-slate-50 hover:text-black hover:border-bg-gray-600' href=""><SlSocialLinkedin size={25} /></a>
              <a className='border-2 rounded-full m-3 p-3 bg-gray-700 hover:bg-slate-50 hover:text-black hover:border-bg-gray-600' href=""><SlSocialInstagram size={25} /></a>
              <a className='border-2 rounded-full m-3 p-3 bg-gray-700 hover:bg-slate-50 hover:text-black hover:border-bg-gray-600' href=""><SlSocialGithub size={25} /></a>
            </div>
            <p className='text-center font-montserrat text-lg font-bold'>CopyRight 2023. All Right Reserved</p>
          </div>
        </div>
      </div>      
    </section>
  )
}
