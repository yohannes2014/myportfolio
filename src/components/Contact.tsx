import React, { useState } from 'react';
import { MdEmail } from "react-icons/md";
import { FaMobile } from "react-icons/fa";
import  axios  from "axios";

const Contact: React.FC = () => {
  const [input, setInput] = useState({
    fullName:'',
    email:'',
    message:''
  });

const handleInput = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
   const { name, value} = e.target;

   setInput((pre)=>({...pre, [name]:value}));

}

const submitHandler = (e:React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const mess = {
    fullname:input.fullName,
    email:input.email,
    message:input.message
  }

axios.post('http://localhost:8000/api/message', mess)
.then(()=>console.log(mess))
.catch((err)=>console.log(err))

}

  return (
    <div className='lg:w-[1120px] m-auto '  >
      <p className='text-center text-primary 2xs:text-[28px] font-bold text-[18px] pt-20 mb-2' id='contact'>Contact us</p>

      <div className=' w-full flex justify-center'>
        <div className='rounded-xl w-[600px] shadow-shadow backdrop-blur-sm bg-slate-100 h-[300px]'>
          <p className='text-center text-primary font-bold mt-2 text-[16px]'>Send message</p>
          <div className='p-3'>
            <form onSubmit={submitHandler}>
              <div className='3xs:mb-1'>
                <div className='flex justify-between px-1'>
                  <label className='text-[12px]'>Full name:</label>
                  <p className='text-red-500 font-bold'>*</p>
                </div>
                <input onChange={handleInput} name='fullName' className='w-full h-7 text-md px-1 text-primary font-semibold bg-white border-b-2 border-blue-300 rounded-md focus:outline-lime-200' type='text' />
              </div>
              <div className='mt-1'>
                <div className='flex justify-between px-1'>
                  <label className='text-[12px]'>Email:</label>
                  <p className='text-red-500 font-bold'>*</p>
                </div>
                <input onChange={handleInput} name='email' className='w-full h-7 text-md px-1 text-primary font-semibold bg-white border-b-2 border-blue-300 rounded-md focus:outline-lime-200' type='email' />
              </div>
              <div className='mt-1'>
                <div className='flex justify-between px-1'>
                  <label className="text-[12px]" >Message:</label>
                  <p className='text-red-500 font-bold'>*</p>
                </div>
                <textarea onChange={handleInput} name='message' className='w-full h-[50px] px-1 text-md text-primary font-semibold bg-white border-b-2 border-blue-300 rounded-md focus:outline-lime-200 resize-none' ></textarea>
              </div>
              <div className='flex gap-3 my-1'>
                <button  className='bg-primary hover:bg-blue-950 text-white px-5 py-1 text-[12px] rounded-md' type='submit'>Submit</button>
                <p className='cursor-pointer bg-green-500 px-3 py-1 rounded-md hover:bg-green-600 text-[12px] text-white'>Cancel</p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='m-4'>
        <p className='font-bold text-primary'>Address</p>
        <div className=''>
          <div className='flex items-center'>
          <FaMobile className='mr-2 text-primary' />
          <a className='text-blue-700' href="tel:+251912 445 517">+251 91 244 5517</a>
          </div>
          <div className='flex items-center'>
          <MdEmail className='mr-2 text-primary' />
          <a className='text-blue-700' href="mailto:m.yohannes2010@gmail.com">m.yohannes2010@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact