import React from 'react';
import Wrapper from '@/components/shared/Wrapper';
import { BiRightArrowAlt } from "react-icons/bi";
import Card from '@/components/shared/Card';

const SpecializedTrack = () => {
  return (
    <section>
      <Wrapper>
        <div className='p-6'>

          <div>
            <h1 className='text-4xl font-bold'>Specialized Tracks</h1>
            <p className='text-slate-400 mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit praesentium iure, impedit sapiente quo nostrum quia nulla est provident architecto assumenda possimus deleniti? Repellat ratione non vel possimus accusamus neque!</p>
          </div>

          <div className='mt-6 sm:flex gap-6'>

            <div className='shadow-xl basis-8/12 rounded border border-teal-800 p-8'>
              {/* left_part */}
              <div>
                <h3 className='text-teal-900'>READY FOR THE NEW ERA</h3>
                <h2 className='text-2xl lg:text-3xl font-bold'>ARTIFICIAL INTELLIGENCE</h2>
                <p className='mt-4 text-slate-400'>
                  A ONE YEAR AI PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS.
                  GETTING PAKISTAN READY FOR THE NEW ERA OF COMPUTING ENABLED BY THE RISE OF AI.
                </p>
                <button className='text-teal-900 text-xl underline font-bold mt-6 flex items-center '>
                  Learn More
                  <BiRightArrowAlt className='text-teal-900 ml-2 mt-1 text-2xl hover:scale-105 duration-500' />
                </button>
              </div>
              <div className='flex items-stretch flex-1 mt-8 gap-4 mx-auto '>

                <Card
                  h1='Quarter 4'
                  p='In this module, students will learn the basic mathematical and statistical concepts that are needed to practice data science and understand deep learning'
                  number={4}
                />

                <Card
                  h1='Quarter 5'
                  p='students will learn key concepts and techniques used to perform data science; including statistical analysis, data cleansing and transformation, and data visualization with Python.'
                  number={5}
                />
              </div>

            </div>


            <div className='basis-4/12 mt-6 sm:mt-0 p-6'>
              {/* right_part */}
              <div>
                <div className='flex border-xl rounded border-gray-500 shadow-xl'>
                  <img src="https://miro.medium.com/v2/resize:fit:1400/1*BI09I0D58BBYPD_LgE46Mw.png" alt="image" className='w-[100px] h-[100px] p-2' />
                  <div className='ml-1 p-2'>
                    <h1 className='font-bold text-xl text-teal-900'>Data Science Essentials</h1>
                    <p className='text-slate-400'>data cleansing and transformation</p>
                  </div>
                </div>
                <div className='flex border-xl rounded border-gray-500 shadow-xl'>
                  <img src="https://www.ovhcloud.com/sites/default/files/styles/large_screens_1x/public/2022-05/whatis_deep_learning.png" alt="image" className='w-[100px] h-[100px] p-2' />
                  <div className='ml-1 p-2'>
                    <h1 className='font-bold text-xl text-teal-900'>Fundamentals of Deep Learning</h1>
                    <p className='text-slate-400'>data cleansing and transformation</p>
                  </div>
                </div>
                <div className='flex border-xl rounded border-gray-500 shadow-xl'>
                  <img src="https://5.imimg.com/data5/SELLER/Default/2023/7/328306294/TN/IF/ZY/24199942/machine-learning-deep-learning-artificial-intelligence-services.png" alt="image" className='w-[100px] h-[100px] p-2' />
                  <div className='ml-1 p-2'>
                    <h1 className='font-bold text-xl text-teal-900'>Fundamentals of Deep Learning</h1>
                    <p className='text-slate-400'>data cleansing and transformation</p>
                  </div>
                </div>
                <div className='flex border-xl rounded border-gray-500 shadow-xl'>
                  <img src="https://static.javatpoint.com/tutorial/machine-learning/images/machine-learning-vs-deep-learning.png" alt="image" className='w-[100px] h-[100px] p-2' />
                  <div className='ml-1 p-2'>
                    <h1 className='font-bold text-xl text-teal-900'>Fundamentals of Deep Learning</h1>
                    <p className='text-slate-400'>data cleansing and transformation</p>
                  </div>
                </div>
                <div className='flex border-xl rounded border-gray-500 shadow-xl'>
                  <img src="https://cdn-icons-png.flaticon.com/512/3097/3097922.png" alt="image" className='w-[100px] h-[100px] p-2' />
                  <div className='ml-1 p-2'>
                    <h1 className='font-bold text-xl text-teal-900'>Fundamentals of Deep Learning</h1>
                    <p className='text-slate-400'>data cleansing and transformation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Wrapper>
    </section>
  )
}

export default SpecializedTrack;
