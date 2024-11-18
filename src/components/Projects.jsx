import React from 'react';
import Gym from '../assets/gymp.png'
import fruit from '../assets/fruitp.png'
import shoes from '../assets/shoesp.png'
 import foodp from '../assets/foodp.png'
 import ecomp from '../assets/ecomp.png'
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
    {
      title: 'shoping website',
      desc: 'Built an interactive e-commerce shopping website using React.js, featuring dynamic components for a seamless and engaging user experience.',
      image: ecomp,
      github: "https://github.com/Hariprasath-M1/Product-website"
    },
    {
      title: 'Basic food webpage',
      desc: 'Developed a simple food webpage showcasing a vibrant layout, allowing users to explore delicious meals effortlessly.',
      image: foodp,
      github: "https://github.com/Hariprasath-M1/Basic-food-webpage"
    },
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