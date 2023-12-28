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
        <Image
        src="/assets/signature.png"
        alt="logo"
        width={300}
        height={300}
        className='rounded-md'
        />
      </div>
    </div>
  )
}

export default About