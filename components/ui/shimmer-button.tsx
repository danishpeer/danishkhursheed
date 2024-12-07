import React from 'react'

const ShimmerButton = ({
    title, icon, position, handleClick, addClasses
} : {
    title: string,
    icon: React.ReactNode,
    position: string,
    handleClick?: () => void,
    addClasses?: string
}) => {
  return (
     
    <button onClick={handleClick} className={` relative inline-flex h-12 w-full animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-7 font-light text-md text-slate-300 transition-colors focus:outline-none md:w-60 md:mt-10 gap-2 ${addClasses}`}>
        {position==="left" && icon}
        {title}
        {position==="right" && icon}
    </button>
      
  )
}

export default ShimmerButton
