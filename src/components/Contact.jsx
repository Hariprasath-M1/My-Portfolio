import { useState, useRef } from 'react'; 
import Lottie from 'lottie-react';
import contact from '../assets/Contact.json';
import emailjs from '@emailjs/browser';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';

const Contact = () => {
  const [alert, setAlert] = useState(null);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current['from_name'].value;
    const email = form.current['from_email'].value;
    const message = form.current['messages'].value;

    // Basic Validation
    if (!name || !email || !message) {
      setAlert({
        message: 'Please submit the details.',
        type: 'error',
      });
      return;
    }

    emailjs
      .sendForm('service_izdyz5f', 'template_soiijkb', form.current, {
        publicKey: 'OJFcnVqJgyBsBZSip',
      })
      .then(
        () => {
          setAlert({
            message: 'Message sent successfully!',
            type: 'success',
          });
          form.current.reset(); // Reset form after submission
        },
        (error) => {
          setAlert({
            message: `Something went wrong: ${error.text}`,
            type: 'error',
          });
        }
      );
  };

  return (
    <section id="contact" className='z-50 bg-gray-800 relative py-10 px-5 md:px-0'>
      <div className="mb-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 mb-8 ml-2 md:mb-0">
            <h2 className="text-3xl font-bold mb-3 text-red-500">Get in Touch</h2>
            <p className="mb-4 text-white/85">I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/60 hover:text-foreground/80">
                <img src={facebook} alt="" className="h-6 w-6" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-foreground/80">
                <img src={instagram} alt="" className="h-6 w-6" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-foreground/80">
                <img src={linkedin} alt="" className="h-6 w-6" />
              </a>
            </div>
            <Lottie animationData={contact} className='w-[350px] mx-auto lg:w-[500px]' />
          </div>
          <form className="w-full md:w-1/2 bg-gray-100 rounded-lg border border-red-300 shadow-lg shadow-red-500 p-10" ref={form} onSubmit={sendEmail}>
            <h1 className='text-gray-900 text-4xl font-bold mb-7'>Contact Me</h1>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input id="name" placeholder='Full Name' type="text" name="from_name" className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" placeholder='Email' id="email" name="from_email" className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" placeholder='Enter Your Message' name="messages" rows={4} className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
            </div>
            <button type="submit" className='bg-red-500 text-white px-3 py-2 rounded-lg'>Send Message</button>
          </form>
        </div>
      </div>

      {/* Alert Box */}
      {alert && (
        <div
          className={`absolute top-5 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-md text-white ${alert.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}
        >
          {alert.message}
        </div>
      )}
    </section>
  );
};

export default Contact;
