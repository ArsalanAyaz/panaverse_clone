
import Wrapper from '@/components/shared/Wrapper'
import Image from 'next/image'
import girl from '@/assets/images/girl.png'
import { GrStatusGood } from "react-icons/gr";

const outcomeIcons = ["Artificial intelligence",'Cloud computing','Web 3.0', 'Deep Learning']

const ProgramOutcome = () => {
  return (
    <section className='p-6 mt-10'>
        <Wrapper>
                <div className='flex items-center flex-col-reverse md:flex-row gap-x-4 flex-1'>
                    {/* left side */}

                    <div className='mt-10 lg:mt-0'>
                        <Image src={girl}
                               alt="girl Image"
                               className=''
                             />
                    </div>

                    {/* right side */}
                    <div className='sm:mt-10'>
                        <h1 className='font-bold text-2xl md:text-6xl underline'>Achieve Your Goals</h1>
                        <p className='mt-4'>The first two quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. </p>
                        
                        <div className='grid grid-cols-2 mt-8 gap-x-2 gap-y-4 '>
                            {outcomeIcons.map((items,i) => {

                                return(
                                    <div key={i} className='flex gap-x-4 items-center'>
                                            <GrStatusGood   className='font-bold text-xl md:text-4xl text-primary'/>
                                            <h4 className=' font-bold text-lg xl:text-3xl'>{items} </h4>
                                    </div>
                                )
                            } )}
                        </div>
                    </div>


                </div>
        </Wrapper>
    </section>
  )
}

export default ProgramOutcome