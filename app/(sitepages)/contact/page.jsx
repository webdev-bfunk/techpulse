import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import Link from 'next/link'
const Contact = () => {
  return (
    <div className='sm:mx-auto sm:w-full lg:max-w-[900px] py-10'>
      <div className='wrapper bg-gray-50 px-4 py-8 shadow-lg rounded-md sm:px-10 text-center'>
        <div className='mb-10 text-gray-900 w-full'>
          <h1 className='text-3xl font-bold uppercase'>
            Get In Touch!
          </h1>
          <span className='text-gray-700'>
            Please allow 24 hours for a response
          </span>
          <div className="flex gap-3 w-full items-center mt-2 justify-center">
            <Link href="/"><FaFacebookF className='text-6xl p-1  text-sky-400 hover:text-sky-500' /></Link>
            <Link href="/"><FaTwitter className='text-6xl p-1 text-sky-400 hover:text-sky-500' /></Link>
            <Link href="/"><FaYoutube className='text-6xl p-1 text-sky-400 hover:text-sky-500' /></Link>
            <Link href="/"><FaInstagram className='text-6xl p-1  text-sky-400 hover:text-sky-500' /></Link>
          </div>
        </div>

  
        <form className="space-y-6">
          <div className="flex gap-5 flex-col">
            <input type="text"
            placeholder='Name...'
            className='block w-full rounded-md border-0 text-gray-900 shadow-sm focus:ring-sky-400 focus:border-sky-500 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 p-2 focus:outline-sky-400' />
            <input type="text"
            placeholder='Email...'
            className='block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 focus:ring-sky-400 focus:border-sky-500 ring-inset ring-gray-300 placeholder:text-gray-400 p-2 focus:outline-sky-400' />
            <textarea rows="5" type="text"
            placeholder='Message...'
            className='resize-none block focus:ring-sky-400 focus:border-sky-500 w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 p-2 focus:outline-sky-400' />
            <button className="inline-block h-16 rounded-full hover:bg-sky-500 hover:scale-95 bg-sky-400 py-2 px-8 relative flex-grow sm:flex-grow-0 text-white"
                    type="submit">
                        Submit
                    </button>
          </div>
        </form>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center mt-10'>
          <div className='w-1/2'>
            <h1 className='text-3xl font-bold text-gray-900 mb-3'>Phone</h1>
            <p className='text-gray-700'>616-482-5733</p>
            <p className='text-gray-700'>1-800-345-5874</p>
          </div>
          <div className='w-1/2'>
            <h1 className='text-3xl font-bold text-gray-900 mb-3'>Address</h1>
            <p className='text-gray-700'>123 Fake St. <br />Springfield, UA 35062 <br />United States</p>
          </div>
        </div>
        </div>
      </div>
  )
}

export default Contact