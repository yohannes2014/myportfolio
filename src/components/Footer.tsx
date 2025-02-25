import React from 'react';
import { HashLink  as Link} from "react-router-hash-link";

const Footer:React.FC = () => {
  return (
    <div className="bg-blue-950 w-screen">
      <div className="lg:w-[1120px] m-auto">
        <div className="ml-4 pt-4">
          <ul className='pr-5 text-yellow-300'>
            <li><Link to="#home">Home</Link></li>
            <li><Link to="#about">About</Link></li>
            <li><Link to="#skill">Skills</Link></li>
            <li><Link to="#portfolio">Works</Link></li>
            <li><Link to="#contact">Contact</Link></li>
          </ul>
        </div>
        <p className='text-white text-center'>© Copyright Yohannes Manaye. All Rights Reserved</p>
        <p className='text-white text-center'>Developed by Yohannes manaye</p>
      </div>
    </div>
  );
};

export default Footer;



