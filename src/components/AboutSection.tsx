import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const AboutSection: React.FC = () => {
  const imageRef = useRef(null);
  const [scrollPos, setScrollPoss] = useState(0);
  const ref = useRef(null);

  const isInView = useInView(ref, {once:true});

  const animateControl = useAnimation();

  useEffect(()=>{
    if(isInView){
      animateControl.start('visible')
    }
  },[isInView])

  useEffect(()=>{
    const handleScroll = () =>{
      setScrollPoss(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll);

  /*   return () => {
      window.removeEventListener('scroll', handleScroll)
    } */
  });

  const rotation = scrollPos*0.458;

  const aboutVariant = {
    hidden:{ opacity:0, x:"-100%"},
    visible:{
      opacity:1,
      x:"0%"
   
    }
  }

  return (
    <div className='lg:w-[1120px] m-auto'  >
      
      <p  className='text-center text-primary 2xs:text-[28px] font-bold text-[18px] pt-[80px] ' id='about' >About</p>
      <div className='grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 font-semibold bg-slate-100 rounded-2xl mx-4 h-[550px] py-4 mt-6'>
      <img src='/images/logo.PNG' alt='logo' className='md:w-40 m-8 p-4 2xs:w-20 2xs:m-0 2xs:p-0 opacity-10 absolute w-32' ref={imageRef} style={{transform:`rotate(${rotation}deg)`}} />
        <div className='col-start-1 col-end-2  h-[200px] row-start-1 row-end-2 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2 md:h-full flex items-center px-6'>
          <motion.p  variants={aboutVariant} initial="hidden" animate={animateControl} transition={{duration:2}} className='text-center text-[12px] md:text-[16px] font-semibold shadow-shadow text-primary p-2 rounded-lg mr-2'>
          I am a dedicated junior web developer with one year of experience in building web applications and ERP systems. With a strong passion for technology, I am eager to continuously expand my skills and stay up-to-date with industry trends. My focus is on creating efficient, scalable solutions that deliver value and meet user needs.
          </motion.p>
        </div>
        <div className=' col-start-1 col-end-2 row-start-2 row-end-3 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 flex items-center justify-center'>
          <img  ref={ref} className='h-[215px] w-3/4 rounded-2xl' src='/images/IMG-20250223-WA0000.jpg' />
        </div>
      </div >
    </div>
  )
}

export default AboutSection