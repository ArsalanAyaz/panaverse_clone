import React from 'react'
import Wrapper from '@/components/shared/Wrapper'
import Button from '@/components/shared/Button'

const Core_Tracks = () => {
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

           <div className='flex flex-col sm:flex-row p-6 gap-7'>

                <div className='relative px-8 py-8 border rounded-xl'>
                    <h1 className='font-bold'>Quarter 1</h1>
                    <p className='text-slate-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, et.</p>
                    <div className='absolute top-0 right-10 text-8xl font-bold -z-10 text-gray-200'>1</div>
                </div>
                <div className='relative px-8 py-8 border rounded-xl'>
                    <h1 className='font-bold'>Quarter 2</h1>
                    <p className='text-slate-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, et.</p>
                    <div className='absolute top-0 right-10 text-8xl font-bold -z-10 text-gray-200'>2</div>
                </div>
                <div className='relative px-8 py-8 border rounded-xl'>
                    <h1 className='font-bold'>Quarter 3</h1>
                    <p className='text-slate-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, et.</p>
                    <div className='absolute top-0 right-10 text-8xl font-bold -z-10 text-gray-200'>3</div>
                </div>
                

           </div>
            
        </Wrapper>
    </section>
  )
}

export default Core_Tracks