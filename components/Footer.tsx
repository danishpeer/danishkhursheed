import React from 'react'
import ShimmerButton from './ui/shimmer-button'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'
import Link from 'next/link'

const Footer = () => {
    
  return (
    <footer className='w-full md:mb-5 mb-[100px] pb-10' id="contact">

      <div className='flex flex-col items-center'>
        <h1 className='heading lg:max-w-[45vw]'> <span className='text-purple'>Interested</span> in discussing possible collaboration</h1>
        <p className='text-white-200 md:mt-10 my-5 text-center'>Reach out to me and lets discuss further on a cup of coffee</p>
        <a href='mailto:pdkh100@gmail.com'>
            <ShimmerButton title="Lets get Started" icon={<FaLocationArrow />} position='right' />
        </a>
      </div>
      <div className='flex mt-16 flex-col md:flex-row justify-between items-center' >
        <p className='md:text-base text-small md:font-normal font-light'> Copyright © 2024 Peerzada Danish</p>
        <div className='flex items-center md:gap-3 gap-6'>
            {
                socialMedia && socialMedia.map(profile => (
                    <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-100 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                        <Link href={profile.href}><img src={profile.img} alt={profile.img} width={20} height={20} /></Link>
                    </div>
                ))
            }
        </div>
      </div>
    </footer>
  )
}

export default Footer
