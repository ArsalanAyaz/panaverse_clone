import React from 'react'
import Wrapper from '@/components/shared/Wrapper'
import Image from 'next/image'
import main from "@/assets/images/main.webp"

const Hero = () => {
  return (
    <section className=''>
        <Wrapper> 

            <div className='flex p-6 items-center gap-4'>

                {/* left side */}

                <div className='flex-1'>
                    <h4 className='text-teal-800 font-semibold text-lg'>Discover your journey</h4>
                    <h1 className='text-5xl font-bold'>Launch Your Dev Career With Web 3 and Metaverse</h1>
                    <p className='mt-4'>Certified Web 3.0 and Metaverse Developer. A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet.</p>
                    <button className='bg-teal-800 p-2 mt-6 rounded text-white hover:bg-teal-700 duration-300'>Exolore course</button>
                </div>

                {/* right side */}

                <div className='flex-1'>
                    <Image src={main} alt="boy image"/>
                </div>



            </div>

        </Wrapper>
    </section>
  )
}

export default Hero