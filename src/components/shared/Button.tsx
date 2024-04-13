import React, { FC } from 'react'

const Button : FC<{text:string}> = ({text}) => {

    

  return (
    <div className='bg-teal-800 p-2 text-white text-semibold hover:shadow-2xl 
    rounded text-center w-[150px] hover:scale-105 duration-300
    '>
        {text}
    </div>
  )
}

export default Button