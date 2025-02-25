import React from 'react';
import { CiMobile1 } from "react-icons/ci";
import { CiMail } from "react-icons/ci";

const HeaderCont:React.FC = () => {
  return (
    <div className="lg:w-[1120px] m-auto flex justify-between px-2 2xs:px-5 py-1 filter-[4px] backdrop-blur-md bg-gray-50 rounded-md" id="home">

             <div className='flex items-center'>
             <CiMobile1 className='text-[18px] font-thin text-primary'/> 
             <a className="text-primary 3xs:font-semibold cursor-pointer hover:text-light 3xs:text-[10px] text-[8px] sm:text-[14px] md:text-[16px] lg:text-[18px]" href="tel:+251912 445 517">+251 9124 445 517</a>

             </div>
             <div className='flex items-center'>
             <CiMail className='text-[18px] mr-2 font-thin text-primary' /> 
             <a className="text-primary 3xs:font-semibold cursor-pointer hover:text-light 3xs:text-[10px] text-[8px] sm:text-[14px] md:text-[16px] lg:text-[18px]" href="mailto:m.yohannes2010@gmail.com"> m.yohannes2010@gmail.com</a>
             </div>
    </div>
  )
}

export default HeaderCont


