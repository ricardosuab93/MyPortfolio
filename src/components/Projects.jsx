import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import projImg1 from '../assets/img/project-img1.png'
import projImg2 from '../assets/img/project-img2.png'
import projImg3 from '../assets/img/project-img3.png'

export const Projects = () => {
  const projects = [
    {
      title: 'Business Startup',
      description: 'Design & Development',
      imgUrl: projImg1
    },
    {
      title: 'Business Startup',
      description: 'Design & Development',
      imgUrl: projImg2
    },
    {
      title: 'Business Startup',
      description: 'Design & Development',
      imgUrl: projImg3
    },
    {
      title: 'Business Startup',
      description: 'Design & Development',
      imgUrl: projImg1
    },
    {
      title: 'Business Startup',
      description: 'Design & Development',
      imgUrl: projImg2
    },
    {
      title: 'Business Startup',
      description: 'Design & Development',
      imgUrl: projImg3
    }
  ]

  return (
    <section className='projects' id='projects'>
      <div className='container mx-auto'>
        <h1>projectsd</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis,
          ut soluta repellat neque veniam voluptates, blanditiis dignissimos,
          nihil doloremque deleniti asperiores modi! Eligendi explicabo fugit
          rerum molestiae, amet repudiandae ratione.
        </p>
        <div>

        </div>
      </div>
    </section>
  )
}
