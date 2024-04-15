import React from 'react'
import Wrapper from '@/components/shared/Wrapper'
import Button from '@/components/shared/Button'


const Core_Tracks = () => {


    const CoreTracksData = [
        {
            header:"Quarter 1",
            description: "In this module, students will be introduced to Anaconda, the leading open data science platform powered by Python",
            number:1
        },
        {
            header:"Quarter 2",
            description: "Before implementing deep-learning algorithms, students will first become familiar with the mathematical blocks of the neural networks theory. Students will get a chance to get their hands dirty writing some simple Keras code right away",
            number:2
        },
        {
            header:"Quarter 3",
            description: "This module provides a soup-to-nuts learning experience for core Docker technologies, including the Docker Engine, Images, Containers, Registries, Networking, Storage, and more",
            number:3
        },
    ]




  return (
    <section className='mt-8 lg:mt-16'>
        <Wrapper>
           
           <div className='p-6 max-w-screen-md'>

                <h4 className='text-teal-700 font-semibold text-xl'>Program of studies</h4>
                <h1 className='text-4xl lg:text-4xl font-bold'>Core Courese <br />(Common in all specializations): </h1>
                <p className='mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className='mt-4'>
                    <Button text='Learn More ... '/>
                </div>
           </div>


           {/* boxes */}

           <div className='flex flex-col items-stretch sm:flex-row p-6 gap-6'>

                
                {CoreTracksData.map((items,i) => {
                    
                    return(
                        <div key={i} className='relative px-8 flex-1 items-stretch py-8 border rounded-xl hover:shadow-xl hover:scale-105 duration-500 mx-auto '>
                            <h1 className='font-bold'>{items.header}</h1>
                            <p className='text-slate-400'>{items.description}</p>
                            <div className='absolute top-0 right-10 mt-4 text-8xl font-bold -z-10 text-gray-200'>{items.number}</div>
                        </div>
                    )
                })}
                

           </div>
            
        </Wrapper>
    </section>
  )
}

export default Core_Tracks