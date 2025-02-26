import React, { useState } from 'react';
import { MdEmail } from "react-icons/md";
import { FaMobile } from "react-icons/fa";
import axios from "axios";
import Message from './Message';
import { messageApi } from '../api/api';

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(false);
  const [input, setInput] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  const [error, setError] = useState({
    fullname: '',
    email: '',
    message: ''
  });



  const handleFullname = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((pre) => ({ ...pre, [name]: value }));

    if (value === "") {
      setError((pre) => ({ ...pre, fullname: "Please enter your name" }))
    }
    setError((pre) => ({ ...pre, fullname: "" }))
  }
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((pre) => ({ ...pre, [name]: value }));

    if (value === "") {
      setError((pre) => ({ ...pre, email: "Please enter your email" }))
    }
    setError((pre) => ({ ...pre, email: "" }))
  }
  const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInput((pre) => ({ ...pre, [name]: value }));

    if (value === "") {
      setError((pre) => ({ ...pre, message: "Please enter your message" }))
    }
    setError((pre) => ({ ...pre, message: "" }))
  }

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (input.fullName === "" && input.email === "" && input.message === "") {
      setError((pre) => ({ ...pre, fullname: "Please enter your name" }))
      setError((pre) => ({ ...pre, email: "Please enter your email" }))
      setError((pre) => ({ ...pre, message: "Please enter your message" }))
      return
    }
    else if (input.fullName === "") {
      setError((pre) => ({ ...pre, fullname: "Please enter your name" }))
    }
    else if (input.email === "") {
      setError((pre) => ({ ...pre, email: "Please enter your email" }))
    }
    else if (input.message === "") {
      setError((pre) => ({ ...pre, message: "Please enter your message" }))
    }
    else {

      setLoading(true)

      const mess = {
        fullname: input.fullName,
        email: input.email,
        message: input.message
      }

      axios.post(messageApi, mess)
        .then(() => {
          setLoading(false);
          setMessage(true);

          setTimeout(() => {
            setMessage(false);
          }, 2000);


        })
        .catch((err) => console.log(err))
        .finally(() => {

          setInput({
            fullName: '',
            email: '',
            message: ''
          });

        })
    
    }


  }

  const setCancel = () => {
    setInput({
      fullName: '',
      email: '',
      message: ''
    });

    setError({
      fullname: '',
      email: '',
      message: ''
    })
  }

  return (
    <>
      {message && <Message />}
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
                    <p className='text-red-400  text-[12px] md:text-[16px]  '>{error.fullname}</p>
                  </div>
                  <input onChange={handleFullname} value={input.fullName} name='fullName' className='w-full h-7 text-md px-1 text-primary  bg-white border-b-2 border-blue-300 rounded-md focus:outline-lime-200' type='text' />
                </div>
                <div className='mt-1'>
                  <div className='flex justify-between px-1'>
                    <label className='text-[12px]'>Email:</label>
                    <p className='text-red-400  text-[12px] md:text-[16px] '>{error.email}</p>
                  </div>
                  <input onChange={handleEmail} value={input.email} name='email' className='w-full h-7 text-md px-1 text-primary bg-white border-b-2 border-blue-300 rounded-md focus:outline-lime-200' type='email' />
                </div>
                <div className='mt-1'>
                  <div className='flex justify-between px-1'>
                    <label className="text-[12px]" >Message:</label>
                    <p className='text-red-400  text-[12px] md:text-[16px]  '>{error.message}</p>
                  </div>
                  <textarea onChange={handleMessage} name='message' value={input.message} className='w-full h-[50px] px-1 text-md text-primary  bg-white border-b-2 border-blue-300 rounded-md focus:outline-lime-200 resize-none' ></textarea>
                </div>
                <div className='flex gap-3 my-1'>
                  <button className={`bg-primary cursor-pointer hover:bg-blue-950 text-white px-8 py-1 text-[12px] rounded-md ${loading ? 'disabled bg-blue-950' : ''}`} type='submit'>{loading ? 'Sending...' : 'Send'}</button>
                  <p className='cursor-pointer bg-green-500 px-3 py-1 rounded-md hover:bg-green-600 text-[12px] text-white' onClick={setCancel}>Cancel</p>
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
              <a className='text-blue-700' href="mailto:m.yohannes2010@gmail.com" >m.yohannes2010@gmail.com</a>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Contact