import React from 'react';
import { HashLink  as Link} from "react-router-hash-link" ;
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {


  return (
    <div
      id="home"
      className="w-screen py-[200px] bg-cover bg-center"
      style={{backgroundImage: 'url(/images/HOMEback.jpg)' }}
    >
      <div className='lg:w-[900px] md:w-[700px] sm:w-[600px] p-4 grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 lg:justify-around m-auto z-10 rounded-lg overflow-hidden shadow-hero backdrop-blur-sm '>
              <div className="text-blue-950 border-b-2 col-start-1 col-end-2 row-start-1 row-end-2 sm:col-start-1 flex justify-center flex-col">
              <motion.p initial={{opacity:0, y:-100}}  transition={{ duration: 2, ease:'easeIn' }} animate={{opacity:1, y:0}}  className="text-xl  text-primary">Hello this is</motion.p>
              <motion.p initial={{opacity:0, x:-300}}  transition={{ duration: 2, ease:'easeInOut' }} animate={{opacity:1, x:0}} className="font-black lg:text-5xl text-[32px] font-yohannes">Yohannes Manaye</motion.p>
              <motion.p initial={{opacity:0, y:100}}  transition={{ duration: 2, ease:'easeIn'}} animate={{opacity:1, y:0}} className="sm:text-xl text-lg font-bold">I'm a fullstack developer</motion.p>
              <motion.div initial={{opacity:0}}  transition={{ duration: 2, delay:2 }} animate={{opacity:1}} className='w-full flex justify-center'>
              <Link className='bg-primary text-white text-center px-4 rounded-md mt-2 cursor-pointer ' to="#contact" smooth>Contact Me </Link>
              </motion.div>
              
            </div>
            <div className='row-start-2 row-end-3 col-start-1 col-end-2 sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-2 flex justify-center p-4'>
            <motion.img initial={{opacity:0}}  transition={{ duration: 2 }} animate={{opacity:1}} className='rounded-lg h-full w-3/4' src='/images/AboutUs.png' alt='heroImage' />
            </div>
         
      
      </div>

    </div>
  );
};

export default HeroSection;
