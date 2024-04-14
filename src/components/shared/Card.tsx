import React, { FC } from 'react'

const Card : FC<{h1:string, p:string, number:string | number}> = ({h1,p,number}) => {
  return (
    <div>
        <div className='relative px-8 py-8 border rounded-xl'>
                    <h1 className='font-bold'>{h1}</h1>
                    <p className='text-slate-400'>{p}</p>
                    <div className='absolute top-0 right-10 mt-4 text-8xl font-bold -z-10 text-gray-200'>{number}</div>
        </div>
    </div>
  )
}

export default Card