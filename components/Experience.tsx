import { workExperience } from '@/data'
import React from 'react' 
import { Button } from './ui/moving-border'

const Experience = () => {
  return (
    <div className='py-20' id='experience'>
        <h1 className='heading'> <span className='text-purple'>Engineering</span> {' '}
        Experience
            
        </h1>
        <div className='w-full mt-12 grid lg:grid-cols-8 grid-cols-2 gap-10'>
            {workExperience && workExperience.map(card => (
                <Button key={card.id} borderRadius='1.75rem' className='flex-1 text-white border-neutral-200 dark:border-slate-800' duration={Math.floor(Math.random()* 10000)+10000}>
                    <div className='flex flex-col items-center justify-center p-3 py-6 md:p-5 lg:p-10 gap-2 '>
                        <img src={card.thumbnail} alt={card.thumbnail} className='lg:w-32 md:w-20 w-20'/>
                        <h1 className='text-md md:text-lg text-gray-400 '>{card.title}</h1>
                        {/* <div className='lg:ms-5'>
                            <h1 className='text-start text-xl md:text-2xl font-bold'>{card.title}</h1>
                            <p className='text-start text-white-100 mt-3 font-semibold'>
                                {card.desc}
                            </p> */}
                        {/* </div> */}
                    </div>
                </Button>
            ))}
        </div>
    </div>

  )
}

export default Experience
