import React from 'react'
import Button from'./button'

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[900px]w-full mx-auto p-4"> 
        <p className="font-weight-bold text-1xl sm:text-2xl md:text-2xl lg:text-4xl">Get <span className="text-blue-400 font-medium">Fit</span>, Stay <span className="text-blue-400 font-medium">Strong</span></p>

        <h1 className="uppercase font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-8xl">Flex<span className="text-blue-400 font-medium">Fit</span></h1>

        <Button func={()=>{
          window.location.href = '#generate'
        }} text={"Accept & Begin"}></Button>
        
    </div>
  )
}
 