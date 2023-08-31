import React, { useState, useEffect } from 'react'
import bannerImg from '../assets/img/header-img.svg'
import { IoShareSocial } from 'react-icons/io5'

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const toRotate = ['Full Stack Developer', 'Web Developer']
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const period = 2000

  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta)
    return () => clearInterval(ticker)
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i]
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1)

    setText(updatedText)

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setDelta(period)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setDelta(500)
    }
  }

  return (
    <section className='banner' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row items-center'>
          <div className='w-full md:w-7/12'>
            <span className='font-rem'>Welcome to my Portfolio</span>
            <h1 className='text-3xl md:text-4xl font-semibold mt-2 font-montserrat'>
              Hi, I'm Richard <span className='text-blue-500'> {text}</span>
            </h1>
            <p className='mt-4 text-gray-500 font-montserrat'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae minus dignissimos mollitia vel, excepturi voluptas eius
              non ab nemo praesentium ut minima tenetur molestias! Provident
              rerum tenetur nemo. Deserunt, incidunt!
            </p>
            <button
              className='mt-4 border-2 text-white px-4 py-2 flex items-center tracking-wide hover:tracking-wider front-rem'
              onClick={() => console.log('connect')}
            >
              Let's connect
              <IoShareSocial className="ml-1" size={25} />
            </button>
          </div>
          <div className='w-full md:w-5/12 mt-8 md:mt-0'>
            <img src={bannerImg} alt='Banner IMG' className='w-full' />
          </div>
        </div>
      </div>
    </section>
  )
}
