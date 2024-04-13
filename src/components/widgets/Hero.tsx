import React from 'react'
import Wrapper from '@/components/shared/Wrapper'
import Image from 'next/image'
import main from "@/assets/images/main.webp"
import Button from '@/components/shared/Button'

const Hero = () => {
  return (
    <section>
        <Wrapper> 

            <div className='flex flex-col md:flex-row p-6 items-center gap-4'>

                {/* left side */}

                <div className='flex-1'>
                    <h4 className='text-teal-800 font-semibold text-lg'>Discover your journey</h4>
                    <h1 className='text-4xl lg:text-5xl font-bold'>Launch Your Dev Career With Web 3 and Metaverse</h1>
                    <p className='mt-4'>Certified Web 3.0 and Metaverse Developer. A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet.</p>
                    <div className='mt-4'>
                        <Button text={"Learn More"}/>
                    </div>
                </div>

                {/* right side */}

                <div className='flex-1 mt-2 md:mt-0'>
                    <Image src={main} alt="boy image"/>
                </div>



            </div>

        </Wrapper>
    </section>
  )
}

export default Hero