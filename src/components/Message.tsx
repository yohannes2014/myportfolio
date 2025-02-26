import React from 'react'

const Message:React.FC = () => {
  return (
    <div className='fixed top-[200px] w-screen flex justify-center '>
        <div className='backdrop-blur-md bg-message p-2 rounded-md'>
        <p className='text-center text-yellow-100 font-bold'> Your message has been sent</p>
         <p className='text-center text-green-300 font-bold'>Thank you</p>
        </div>
 
    </div>
  )
}

export default Message