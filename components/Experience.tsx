import { workExperience } from '@/data/idx'
import React from 'react'
import { Button } from './ui/moving-border'

function Experience() {
  return (
    <div className='py-20'>
      <h1 className='font-bold text-4xl md:text-5xl text-center'>
        My <span className='text-purple'>Working Experience</span>
        <div className='w-full mt-12 grid grid-cols-1 lg:grid-cols-4 gap-10'>
          {workExperience.map((item, index) => (
            <Button key={item.id}>
              <div className='flex flex-row items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                <img src={item.thumbnail} alt={item.thumbnail} className="lg:w-32 md:w-20 w-16"/>
                <div className='ms-5'>
                  <h1 className='font-bold text-xl md:text-2xl text-start'>
                    {item.title}
                  </h1>
                  <p className='font-semibold text-white text-start mt-3'>
                    {item.desc}
                  </p>
                </div>
              </div>
            </Button>     
          ))}
        </div>
      </h1>
    </div>
  )
}

export default Experience