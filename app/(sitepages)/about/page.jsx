import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='py-10'>
      <div className="wrapper flex flex-col gap-5 justify-center items-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">
          Our Story
        </h1>
        <Image
        src="/assets/about.jpg"
        alt="people"
        width={600}
        height={600}
        className='rounded-md'
        />
        <p className="max-w-[600px] text-center text-gray-600 dark:text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, sit sapiente animi dolorem, delectus voluptates nam sed odit magni neque molestias adipisci   culpa praesentium, similique in voluptatum cupiditate officia dolor?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, sit sapiente      
            animi dolorem, delectus voluptates nam sed odit magni neque molestias adipisci culpa praesentium, similique in voluptatum cupiditate officia dolor?
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, sit sapiente animi dolorem, delectus voluptates nam sed odit magni neque molestias adipisci culpa praesentium, similique in voluptatum cupiditate officia dolor?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, sit sapiente animi dolorem, delectus voluptates nam sed odit magni neque molestias adipisci culpa praesentium, similique in voluptatum cupiditate officia dolor?
        </p>
        <div>
        <h1 className="text-center mb-10 text-3xl font-bold text-gray-900 dark:text-gray-50">Team Members</h1>
          <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 space-x-4'>
            <div className='text-center flex items-center flex-col'>
              <Image
              src="/assets/placeholder.jpeg"
              width={200}
              height={200}
              alt="team"
              className='rounded-full border-2 border-gray-400 mt-5' />
              <p className='dark:text-white text-lg mt-5'>Bob Barker</p>
              <p className='dark:text-white text-lg mt-5 text-left'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam velit officia dicta! Quaerat nihil possimus aliquam magnam rem recusandae id labore! Molestiae quia quam totam, perferendis aliquam quae quaerat a.</p>
            </div>
            <div className='text-center flex items-center flex-col'>
              <Image
              src="/assets/placeholder.jpeg"
              width={200}
              height={200}
              alt="team"
              className='rounded-full border-2 border-gray-400 mt-5' />
              <p className='dark:text-white text-lg mt-5'>Larry Jerry</p>
              <p className='dark:text-white text-lg mt-5 text-left'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam velit officia dicta! Quaerat nihil possimus aliquam magnam rem recusandae id labore! Molestiae quia quam totam, perferendis aliquam quae quaerat a.</p>
            </div>
            <div className='text-center flex items-center flex-col'>
              <Image
              src="/assets/placeholder.jpeg"
              width={200}
              height={200}
              alt="team"
              className='rounded-full border-2 border-gray-400 mt-5' />
              <p className='dark:text-white text-lg mt-5'>Cindy Bindy</p>
              <p className='dark:text-white text-lg mt-5 text-left'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam velit officia dicta! Quaerat nihil possimus aliquam magnam rem recusandae id labore! Molestiae quia quam totam, perferendis aliquam quae quaerat a.</p>
            </div>
            <div className='text-center flex items-center flex-col'>
              <Image
              src="/assets/placeholder.jpeg"
              width={200}
              height={200}
              alt="team"
              className='rounded-full border-2 border-gray-400 mt-5' />
              <p className='dark:text-white text-lg mt-5'>Brad Johnson</p>
              <p className='dark:text-white text-lg mt-5 text-left'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam velit officia dicta! Quaerat nihil possimus aliquam magnam rem recusandae id labore! Molestiae quia quam totam, perferendis aliquam quae quaerat a.</p>
            </div>
          </div>
        </div>
        <Image
          src="/assets/signature.png"
          alt="logo"
          width={600}
          height={600}
          className='rounded-md'
        />
      </div>
    </div>
  )
}

export default About