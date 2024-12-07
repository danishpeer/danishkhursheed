import React from 'react'
import { Spotlight } from './ui/spotlight';
import ShimmerButton from './ui/shimmer-button';
import { FaExpand } from 'react-icons/fa';

const Hero = () => {
    const words = ["Design", "Develop", "Deploy"];
  return (
    <div className='pb-20 pt-36' id='home'>
        <div>
            <Spotlight  className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
            {/* <FlipWords words={words}></FlipWords> */}
        </div>
        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-dot-white/[0.3] bg-dot-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>

        <div className='flex justify-center relative my-20 z-10'>
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw flex flex-col items-center justify-center'>
                <h2 className='tracking-widest text-md text-center text-blue-100 max-w-80'>
                    Welcome,
                </h2>
                <div className='text-center text-[40px] md:text-5xl lg:text-6xl my-4'>
                My Name is <br></br> Peerzada <span className='text-purple'>Danish</span> <br/>
                {/* <FlipWords words={words} duration={1500} /> your <br />
                    Ideas with Velorum */}
                </div>
                <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
                    I am a Software <span className='text-purple'>Engineer</span>. I design distributed backends at scale, build deployment pipelines, and create AI models.
                </p>
                <a href='#about'>
                    <ShimmerButton title='Dive deeper' icon={<FaExpand/>} position='right' />
                </a>
                
            </div>


        </div>


     
    </div>
  )
}

export default Hero
