import React from 'react'
import { portFo } from '../card/portFolio'

const Works: React.FC = () => {
  return (
    <div className='lg:w-[1120px] m-auto' >
      <p className='text-center text-primary 2xs:text-[28px] font-bold text-[18px] pt-20 pb-10 ' id='portfolio'>My Works</p>
      <div className='cursor-pointer grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 gap-4'>
        {portFo.map((item, index) => (

          <div key={index} className={`${item.contaner} bg-cover shadow-shadow bg-center mx-4 rounded-md`} >
          <img className='w-full h-full' src={item.image} alt="portfolio" />
          </div>

        ))}
      </div>

    </div>
  )
}

export default Works
