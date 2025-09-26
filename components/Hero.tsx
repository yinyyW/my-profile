import React from 'react'
import { Spotlight } from '@/components/ui/spotlight'
import { cn } from '@/lib/utils'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import MagicButton from '@/components/ui/magic-button';
import { FaLocationArrow } from 'react-icons/fa';

function Hero() {
  return (
    <div className="pt-36 pb-20 text-amber-50 font-bold">
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        fill="white"
      />
      <Spotlight className="-top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      <Spotlight
        className="-top-10 left-full h-[80vh] w-[50vw]"
        fill="purple"
      />

      <div className="absolute left-0 right-0 flex h-screen w-full items-center justify-center bg-white dark:bg-black-100">
        <div
          className={cn(
            'absolute inset-0',
            '[background-size:40px_40px]',
            '[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]',
            'dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]'
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100"></div>
      </div>

      <div className="flex justify-center relative z-10">
        <div className='flex flex-col items-center justify-center max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]'>
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100">
            Dynamic Web Magic with Next.js
          </h2>
          <TextGenerateEffect words='Transforming Concepts Into Seamless Experience' className='text-center text-[40px] md:text-5xl lg:text-6xl'/>
          <p className='text-center md:tracking-wider mb-4 md:text-lg'>
            Hi, I'm , a passionate web developer specializing in crafting dynamic and responsive web applications using Next.js.
          </p>
          <a href='#about'>
            <MagicButton title='Show My Work' position='right' icon={<FaLocationArrow />}/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
