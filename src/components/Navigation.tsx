import React, { useEffect, useState } from 'react'
import { TbMenu3 } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import { HashLink  as Link} from "react-router-hash-link";

const Navigation:React.FC = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  const [scrolling, setScrolling] = useState<boolean>(false);

  useEffect(() => {
    // Event listener to detect scroll
    const handleScroll = () => {
      if (window.scrollY > 50) {   
        setScrolling(true);
      }
      else {
        setScrolling(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


 
  useEffect(() => {
    // Function to check screen width
    const checkScreenWidth = () => {
      if (window.innerWidth > 768) {
        setClicked(false);
      } 
    };

    // Check screen width on initial load
    checkScreenWidth();

    // Add event listener to check on resize
    window.addEventListener('resize', checkScreenWidth);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);



const handleMenu = () => {
  setClicked(!clicked)
}

const handleButtonClick = () => {
  // Open the PDF in a new tab
  window.open("/resume/newResume.pdf", "_blank");
};


  return (
    <div className={`w-full ${scrolling ? 'shadow-nav backdrop-blur-md' :''} mb-[-125px] lg:w-[1120px] m-auto`}>
         <div className="flex justify-between items-center mx-5 py-2">
            <div><Link to="#home" smooth><img className="3xs:w-[55px] w-[40px]" src="/images/logo.PNG" /></Link></div>
            <div>
                <ul className="flex gap-5 sm:inline-flex 4xs:hidden">
                    <li><Link  className="text-primary  font-semibold text-[18px] after:rounded-sm hover:text-light after:h-1 after:block after:w-full transition-all after:duration-300 after:ease-in-out duration-300 ease-in-out hover:after:bg-light" to='#home' smooth >Home</Link></li>
                    <li><Link  className="text-primary font-semibold text-[18px] after:rounded-sm hover:text-light after:h-1 after:block after:w-full transition-all after:duration-300 after:ease-in-out duration-300 ease-in-out hover:after:bg-light" to="#about" smooth >About</Link></li>
                    <li><Link  className="text-primary font-semibold text-[18px] after:rounded-sm hover:text-light after:h-1 after:block after:w-full transition-all after:duration-300 after:ease-in-out duration-300 ease-in-out hover:after:bg-light" to="#skill" smooth >Skills</Link></li>
                    <li><Link  className="text-primary font-semibold text-[18px] after:rounded-sm hover:text-light after:h-1 after:block after:w-full transition-all after:duration-300 after:ease-in-out duration-300 ease-in-out hover:after:bg-light" to="#portfolio" smooth >Works</Link></li>
                    <li><Link  className="text-primary font-semibold text-[18px] after:rounded-sm hover:text-light after:h-1 after:block after:w-full transition-all after:duration-300 after:ease-in-out duration-300 ease-in-out hover:after:bg-light" to="#contact" smooth >Contact</Link></li>
                </ul>
            </div>
            
            <div onClick={handleMenu} className='sm:hidden w-full flex justify-center' >
             {clicked ? <IoMdClose className='cursor-pointer text-primary font-black 3xs:text-[30px] text-[20px]' /> : <TbMenu3 className='cursor-pointer text-primary font-black 3xs:text-[30px] text-[20px]' /> }
              
            </div>
        
            <div className='shadow-md bg-slate-50 shadow-[#f3f3f3] w-full overflow-hidden absolute left-0 3xs:top-[73px] top-[55px]'>
                <ul className={`flex gap-1 flex-col w-full items-center ${clicked ? '':'mt-[-350px]'} `}>
                    <li><Link onClick={()=>setClicked(false)} className="text-primary w-full 3xs:font-semibold 3xs:text-[18px] text-[16px] after:rounded-sm hover:text-light after:h-1 after:block after:w-full transition-all after:duration-300 after:ease-in-out duration-300 ease-in-out hover:after:bg-light" to="#home" smooth>Home</Link></li>
                    <li><Link onClick={()=>setClicked(false)} className="text-primary 3xs:font-semibold 3xs:text-[18px] text-[16px] after:rounded-sm hover:text-light after:h-1 after:block after:w-full transition-all after:duration-300 after:ease-in-out duration-300 ease-in-out hover:after:bg-light" to="#about" smooth>About</Link></li>
                    <li><Link onClick={()=>setClicked(false)} className="text-primary 3xs:font-semibold 3xs:text-[18px] text-[16px] after:rounded-sm hover:text-light after:h-1 after:block after:w-full transition-all after:duration-300 after:ease-in-out duration-300 ease-in-out hover:after:bg-light" to="#skill" smooth>Skills</Link></li>
                    <li><Link onClick={()=>setClicked(false)} className="text-primary 3xs:font-semibold 3xs:text-[18px] text-[16px] after:rounded-sm hover:text-light after:h-1 after:block after:w-full transition-all after:duration-300 after:ease-in-out duration-300 ease-in-out hover:after:bg-light" to="#portfolio" smooth>Works</Link></li>
                    <li><Link onClick={()=>setClicked(false)} className="text-primary 3xs:font-semibold 3xs:text-[18px] text-[16px] after:rounded-sm hovers:text-light after:h-1 after:block after:w-full transition-all after:duration-300 after:ease-in-out duration-300 ease-in-out hover:after:bg-light" to="#contact" smooth>Contact</Link></li>
                </ul>
            </div>
            <div>
              <p className='bg-primary text-white px-2 py-1 rounded-md' onClick={handleButtonClick}>Resume</p>
            </div>
        </div>
    </div>
  )
}

export default Navigation