import { projects } from '@/data/idx'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'

function RecentProjects() {
  return (
    <div className='py-20'>
      <h1 className='font-bold text-4xl md:text-5xl text-center'>
        A small selection of {" "}<span className='text-purple'>Recent Projects</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((project) => (
          <div key={project.id} className='relative flex items-center justify-center'>
            <PinContainer title={project.title} href={project.link}>
              <div className='relative flex items-center justify-center h-[20vh] sm:w-96 w-[80vw]'>
                <div
                  className="w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162D]"
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img src={project.img} alt={project.title} className='absolute object-contain h-full w-full' />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {project.title}
              </h1>
              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-[#BEC1DD] my-1"
              >
                {project.des}
              </p>

              <div className='flex justify-between'>
                <div className='flex flex-row'>
                  {project.iconLists.map((icon, idx) => (
                    <div className="border border-white/[.2] rounded-full bg-black flex justify-center items-center lg:w-10 lg:h-10 w-8 h-8" style={{
                      transform: `translateX(-${idx * 5 + 2}px)`,
                    }} key={idx}>
                      <img key={idx} src={icon} alt="icon" className='p-2' />
                    </div>
                  ))}
                </div>

                <div className='flex flex-row justify-center items-center'>
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9"/>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects