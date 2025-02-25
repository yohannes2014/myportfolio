import React, { useEffect, useRef } from 'react';
import SkillProgress from './SkillProgress';
import ImageSlide from './ImageSlide';
import { motion, useAnimation, useInView } from 'framer-motion';


const Skill:React.FC = () => {
const useFront = useRef(null);
const isInView = useInView(useFront, {once:true});
const useCss = useRef(null);
const isInCss = useInView(useCss, {once:true});
const useBack = useRef(null);
const isInBack = useInView(useBack, {once:true});
const useData = useRef(null);
const isInData = useInView(useData, {once:true});

const controlAni = useAnimation();
const controlAniCss = useAnimation();
const controlAniData = useAnimation();
const controlAniBack = useAnimation();

useEffect(()=>{
  if(isInView){
     controlAni.start('visible');
  }
  if(isInCss){
    controlAniCss.start('visible');
  }
  if(isInData){
    controlAniData.start('visible');
  }
  if(isInBack){
    controlAniBack.start('visible');
  }
},[isInView, isInCss, isInData, isInBack])


const skillsVariant =  {

  visible:{opacity:1, x:"0%"},
  front:{opacity:0, x:"-100%"},
  css:{opacity:0, x:"100%"},
  back:{opacity:0, x:"-100%"},
  database:{opacity:0, x:"100%"},
  
}

  return (
    <div className='lg:w-[1120px] md:w-[700px] sm:w-[600px] m-auto lg:h-[700px] px-4 overflow-hidden' >
     
        <h1  className='text-center text-primary 2xs:text-[28px] font-bold text-[18px] pt-[80px] mb-2' id='skill' >My Skills</h1>
        <div className="w-full grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2">
          <div className='w-full  sm:col-start-1 sm:col-end-2 '>
          <motion.div ref={useFront} variants={skillsVariant} initial="front" animate={controlAni} transition={{delay:0.3, duration:1}} className='rounded-md shadow-shadow p-2 m-2'>
              <p className='font-bold text-center'>Front-end</p>
              <SkillProgress skill="React" percentage={80} />
              <SkillProgress skill="Typescript" percentage={70} />
              <SkillProgress skill="Redux Toolkit" percentage={75} />
              <SkillProgress skill="Redux Saga" percentage={60} />
            </motion.div>
          </div>
            <div className='w-full sm:row-start-1 sm:row-end-2 sm:col-start-2 sm:col-end-3'>
            <motion.div ref={useCss} variants={skillsVariant} initial="css" animate={controlAniCss} transition={{delay:0.3, duration:1}} className='rounded-md shadow-shadow p-2 m-2'>
              <p className='font-bold'>CSS</p>
              <SkillProgress skill="Bootstrap" percentage={65} />
              <SkillProgress skill="Tailwind" percentage={74} />
              <SkillProgress skill="Emotion" percentage={60} />
            </motion.div>
            </div>
            <div className='w-full sm:col-start-1 sm:col-end-2 sm:row-start-2 sm:row-end-3'>
            <motion.div ref={useBack} variants={skillsVariant} initial="back" animate={controlAniBack} transition={{delay:0.3, duration:1}} className='rounded-md shadow-shadow p-2 m-2 '>
              <p className='font-bold'>Back-end</p>
              <SkillProgress skill="Express" percentage={73} />
              <SkillProgress skill="PHP" percentage={65} />
            </motion.div>
            </div>
           <div className='w-full sm:col-start-2 sm:col-end-3 sm:row-start-2 sm:row-end-3'>
            <motion.div ref={useData} variants={skillsVariant} initial="database" animate={controlAniData} transition={{delay:0.3, duration:1}} className='rounded-md shadow-shadow p-2 m-2'>
              <p className='font-bold'>Database</p>
              <SkillProgress skill="Mongo DB " percentage={77} />
              <SkillProgress skill="Mysql" percentage={60} />
            </motion.div>
            </div>
          </div>
          <ImageSlide />
        </div>
  )
}

export default Skill