import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { FaFileDownload } from 'react-icons/fa'
import meter1 from '../assets/img/meter2_1.svg'
import meter2 from '../assets/img/meter2_2.svg'

export const Skills = () => {
  return (
    <section className='skills' id='skills'>
      <div className='container mx-auto border-2 border-gray-900 bg-gray-900 rounded-2xl'>
        <h1 className='text-2xl font-extrabold font-montserrat text-center m-3'>
          About Me
        </h1>
        <div className='flex flex-col md:flex-row items-center'>
          <div className='w-full md:w-7/12 flex flex-col items-center'>
            <p className='font-montserrat text-lg text-center p-1 m-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              provident similique asperiores quas rerum aliquam ipsam fuga? Qui
              est odit fugit labore distinctio accusamus recusandae repudiandae
              consequatur doloribus? Impedit, atque.
            </p>
            <button className='border-2 m-2 p-2 flex tracking-wider ml- font-rem'>
              Download CV
              <FaFileDownload className='ml-1' size={25} />
            </button>
          </div>
          <div className='w-full md:w-7/12 flex flex-col items-center'>
            <p className='font-montserrat text-lg text-center p-1 m-2'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum in
              quisquam repellat labore voluptatibus unde vitae explicabo odit
              obcaecati ex illo quis, dolore tenetur adipisci dolores doloribus
              animi iure saepe.
            </p>
            <div className='m-4 font-montserrat text-sm'>
              <span className='flex flex-col items-rigth'>
                <p>FRONTEND</p>
                <img src={meter1} alt='meter1' />
              </span>
              <span className='flex flex-col items-rigth'>
                <p>BACKEND</p>
                <img src={meter1} alt='meter1' />
              </span>
              <span className='flex flex-col items-rigth'>
                <p>NODE</p>
                <img src={meter2} alt='meter2' />
              </span>
              <span className='flex flex-col items-rigth'>
                <p>DevOps</p>
                <img src={meter2} alt='meter2' />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
