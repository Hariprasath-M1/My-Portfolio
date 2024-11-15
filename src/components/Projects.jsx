import React from 'react';
import Gym from '../assets/gymp.png'
import fruit from '../assets/fruitp.png'
import shoes from '../assets/shoesp.png'
// import Webelite from '../assets/Webelite.png'
// import Supercar from '../assets/Supercar.png'
import Cards from './Cards';



const Projects = () => {

  const projectJson = [
    {
      title: 'GYM Website',
      desc: 'Developed a dynamic gym website with React, Node, and Express, featuring email functionality for seamless communication.',
      image: Gym,
      github: "https://github.com/Hariprasath-M1/GymTrack"
    },
    {
      title: 'Fruit webpage using animation',
      desc: 'Created an animated fruits e-commerce webpage using React, delivering a visually engaging shopping experience.',
      image: fruit,
      github: "https://github.com/Hariprasath-M1/Fruit-App"
    },
    {
      title: 'E-commerce Website',
      desc: 'Built a comprehensive e-commerce website similar to Amazon and Flipkart, featuring a user-friendly interface and efficient product browsing.',
      image: shoes,
      github: "https://github.com/Hariprasath-M1/Ecommerce_Project"
    },
    // {
    //   title: 'Webelite builder',
    //   desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
    //   image: Webelite,
    //   github: "#"
    // },
    // {
    //   title: 'Super Car',
    //   desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
    //   image: Supercar,
    //   github: "https://github.com/rohitsingh93300/supercars"
    // },
  ];

  return (
    <section id="projects" className='relative bg-gray-700 py-10 px-4'>
      <div id="projects" className="mb-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">           
              {projectJson.map((items) => {
                return <Cards item={items} />              
              })}     
        </div>
      </div>

    </section>
  )
}

export default Projects