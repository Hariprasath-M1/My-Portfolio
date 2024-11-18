import React from 'react'
import Html from '../assets/Html.png'
import Css from '../assets/CSS.png'
import JS from '../assets/JS.png'
import ReactL from '../assets/React.png'
import Redux from '../assets/Redux.png'
import Tailwind from '../assets/Tailwind Css.png'
import Bootstrap from '../assets/Bootstrap.png'
import Nodejs from '../assets/node-js.png'
import Mongodb from '../assets/mongodb.svg'
import Express from '../assets/Express.png'
import MernStack from '../assets/mernstack.png'


const About = () => {
  return (
    <div className='relative' id="about">
      <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">About Me</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Hi, I'm Hariprasath M
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          A Full-Stack Developer specializing in the MERN stack, with skills in web development, React, Node.js, Express, MongoDB.          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">My Journey</h3>
              <p className="mt-4 text-lg text-gray-600">
              I’m focused on building my skills in the MERN stack (MongoDB, Express.js, React, Node.js) through hands-on projects and specialized training. My work includes a gym website with email functionality, an animated e-commerce fruits site, and a full-scale e-commerce platform inspired by Amazon and Flipkart. I’m actively seeking job opportunities and would love to connect.              </p>
              <img src={MernStack} alt="" className='p-2 rounded-lg w-52 mt-4'/>
            </div>
            {/* <div>
              <h3 className="text-2xl font-semibold text-gray-900">Skills & Expertise</h3>
              <ul className="mt-4 space-y-3 text-lg text-gray-600">
                <li>Full-Stack Web Development (MERN Stack)</li>
                <li>WordPress Development</li>
                <li>Search Engine Optimization (SEO)</li>
                <li>React.js, Next.js, Node.js, and Express.js</li>
                <li>Database Management (MongoDB)</li>
                <li>API Integration & Development</li>
              </ul>
            </div> */}
            <div className='border border-red-200 rounded-lg md:p-7 py-7  flex flex-col gap-8 items-center shadow-lg shadow-red-300'>
            <h3 className="text-2xl font-semibold text-red-600">Skills & Expertise</h3>
            <div className='flex items-center justify-center flex-wrap gap-3'>
                <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                  <img src={Html} alt="" className='w-10'/>
                  <span className='font-semibold'>HTML</span>
                </div>
                <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                  <img src={Css} alt="" className='w-8'/>
                  <span className='font-semibold'>CSS</span>
                </div>
                <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                  <img src={JS} alt="" className='w-10'/>
                  <span className='font-semibold'>Javascript</span>
                </div>
                <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                  <img src={ReactL} alt="" className='w-8 rounded-full'/>
                  <span className='font-semibold'>React</span>
                </div>
                <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                  <img src={Redux} alt="" className='w-8'/>
                  <span className='font-semibold'>Redux</span>
                </div>
                <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                  <img src={Tailwind} alt="" className='w-8 rounded-full'/>
                  <span className='font-semibold'>Tailwind</span>
                </div>
                <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                  <img src={Bootstrap} alt="" className='w-10'/>
                  <span className='font-semibold'>Bootstrap</span>
                </div>
                <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                  <img src={Nodejs} alt="" className='w-10'/>
                  <span className='font-semibold'>NodeJs</span>
                </div>
                <div className='border border-red-300 flex items-center w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                  <img src={Mongodb} alt="" className='w-10'/>
                  <span className='font-semibold'>MongoDB</span>
                </div>
                <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                  <img src={Express} alt="" className='w-10 '/>
                  <span className='font-semibold'>Express Js</span>
                </div>
                {/* <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                  <img src={NextJs} alt="" className='w-9 '/>
                  <span className='font-semibold'>Next Js</span>
                </div> */}
                {/* <div className='border border-red-500 flex items-center gap-1 w-max px-2 py-1 rounded-lg'>
                  <img src={Html} alt="" className='w-10'/>
                  <span className='font-semibold'>HTML</span>
                </div>
                <div className='border border-red-500 flex items-center gap-1 w-max px-2 py-1 rounded-lg'>
                  <img src={Html} alt="" className='w-10'/>
                  <span className='font-semibold'>HTML</span>
                </div> */}
            </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-900">More About Me</h3>
          <p className="mt-4 text-lg text-gray-600">
          Apart from coding, I am passionate about learning new technologies and staying updated with the latest trends in web development. I’m currently studying HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB and pursuing certification.          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About