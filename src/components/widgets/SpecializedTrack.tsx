
"use client"

import Wrapper from '@/components/shared/Wrapper';
import { BiRightArrowAlt } from "react-icons/bi";
import Card from '@/components/shared/Card';
import  web_3 from '@/assets/images/web_3.webp'
import  ai from '@/assets/images/ai.webp'
import  cloud1 from '@/assets/images/cloud1.png'
import  iot from '@/assets/images/iot.png'
import Image from 'next/image';
import { useState } from 'react';


const programsData = [

  {
   
    slug: "web3.0",
    header:"Web 3.0 (Blockchain)",
    description: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences",
    image : web_3,
    quarters : [
      {
        header:"Quarter 4",
        description : "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
        number: 4
      },
      {
        header:"Quarter 5",
        description : "MV-361: Developing Planet-Scale and Augmented Metaverse Experiences",
        number: 5
      },
                ]

                
  },
  {
   
    slug: "ai",
    header:"Artificial Intelligence (AI) ",
    description: "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs",
    image : ai , 
    quarters : [
      {
        header:"Quarter 4",
        description : "AI-351: Developing Planet-Scale APIs and Python Programming",
        number: 4
      },
      {
        header:"Quarter 5",
        description : "AI-361: Deep Learning and MLOps (Machine Learning Operations)",
        number: 5
      },
                ]


  },
  {
   
    slug: "cloud",
    header:"Cloud-Native ",
    description: "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
    image : cloud1 , 
    quarters : [
      {
        header:"Quarter 4",
        description : "CN-351: Certified Kubernetes Application Developer (CKAD)",
        number: 4
      },
      {
        header:"Quarter 5",
        description : "CN-361: Developing Multi-Cloud APIs using CDK for Terraform",
        number: 5
      },
                ]


  },
 
  {
   
    slug: "iot",
    header:"Ambient Computing and IoT Specialization ",
    description: "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter, and Embedded Devices.",
    image : iot , 
    quarters : [
      {
        header:"Quarter 4",
        description : "CN-351: Certified Kubernetes Application Developer (CKAD)",
        number: 4
      },
      {
        header:"Quarter 5",
        description : "CN-361: Developing Multi-Cloud APIs using CDK for Terraform",
        number: 5
      },
                ]


  },
 
]

const SpecializedTrack = () => {


  const [selectedItem, setselectedItem] = useState("web3.0")

  const selectedItemData = programsData.find((item) => item.slug === selectedItem )
  


  return (
    <section>
      <Wrapper>
        <div className='p-6'>

          <div>
            <h1 className='text-4xl font-bold'>Specialized Tracks</h1>
            <p className='text-slate-400 mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit praesentium iure, impedit sapiente quo nostrum quia nulla est provident architecto assumenda possimus deleniti? Repellat ratione non vel possimus accusamus neque!</p>
          </div>

          <div className='mt-6 flex flex-col-reverse lg:flex-row gap-6'>

            <div className='shadow-xl self-start sticky top-28 basis-8/12 rounded border border-teal-800 p-8'>
              {/* left_part */}
              <div >
                <h3 className='text-teal-900'>READY FOR THE NEW ERA</h3>
                <h2 className='text-2xl lg:text-3xl font-bold'>{selectedItemData?.header}</h2>
                <p className='mt-4 text-slate-400'>
                  {selectedItemData?.description}
                </p>
                <button className='text-teal-900 text-xl underline font-bold mt-6 flex items-center '>
                  Learn More
                  <BiRightArrowAlt className='text-teal-900 ml-2 mt-1 text-2xl hover:scale-105 duration-500' />
                </button>
              </div>

              <div className='flex flex-col sm:flex-row items-stretch flex-1 mt-8 gap-4 mx-auto '>

                { selectedItemData?.quarters.map((items) => {

                  return (

                    <Card
                    key={items.number}
                    h1={items.header}
                    p={items.description}
                    number={items.number}
                  />

                  )
                })}

               

               
              </div>

            </div>


            <div className='basis-4/12 mt-6 sm:mt-0 p-6'>
              {/* right_part */}
              <div>


                    {programsData.map((items) => {
                      return(

                        <div onClick={() => setselectedItem(items.slug)} key={items.slug} className='flex border-xl rounded border-gray-500 hover:shadow-xl space-y-4 items-center'>
                            <Image src={items.image} alt={items.header} className='h-[100px] w-[100px] object-cover bg-cover bg-center rounded'/>
                            <div className='ml-1 p-2'>
                              <h1 className='font-bold text-xl text-teal-900'>{items.header}</h1>
                              <p className='text-slate-400'>{items.description}</p>
                            </div>
                        </div>

                      )
                    })}


                      
                
              
                
               
                
              </div>
            </div>
          </div>

        </div>
      </Wrapper>
    </section>
  )
}

export default SpecializedTrack;
