import React from 'react';
import { IoStar } from "react-icons/io5";
import Image from 'next/image';
import { josefinSans } from '@/app/Fonts/fonts';

function CustomerTestimonials() {
    const testimonials=[

        {   
            id:1,
            name:"James",
            insights:"This website has one of the best sneakers winter collection. Extremely affordable and comfy  ",
            image:"/Images/team-member-five.png"
        },

        {   
            id:2,
            name:"Erick",
            insights:"The quality of the lather jacket is amazing.",
            image:"/Images/team-member-one.png"

        },
        {   
            id:3,
            name:"Alexa",
            insights:"I got the pink headphones and let me tell you they were not lieing when they were saying it has a sleek design",
            image:"/Images/team-member-six.png"
        }
    ]
  return (
   <section className='w-screen bg-neutral-300 pt-16 overflow-x-hidden mt-11 '>
   {/* heading and tagline */}
   <div className='h-[190px]'>
     <h2 className={`text-[48px] font-bold msm:text-[40px]${josefinSans.className}`} >Customer Testimonials</h2>
     <p className='xsm:text-sm  '>Our Customers valuable insights. </p>
   </div>
   
    <div className='grid grid-cols-3 grid-rows-1 gap-2 xsm:grid-cols-1 ssm:grid-cols-1 msm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2'>
     {testimonials.map((testimonialArr)=>(
      <div className='flex justify-center items-center' key={testimonialArr.id}>

        <div className='h-[230px] w-[300px] xsm:ml-0 border-black border-solid border-[1px]
         flex justify-around items-center flex-col bg-white ' key={testimonialArr.id}>
            <div className='h-5 w-[290px] flex justify-start items-center text-yellow-500 '>
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
            </div>
            <div className='h-[215px] w-[270px] flex justify-around items-start flex-col'>
                <p>{testimonialArr.insights}</p>
                <div className='flex justify-start items-center gap-5'>
                    <Image
                      src={testimonialArr.image}
                      height={36}
                      width={36}
                      alt={testimonialArr.name}
                      className='rounded-[50%]'
                      ></Image>
                    <div>
                    <h6 className='font-bold text-blue-500'>{testimonialArr.name}</h6>
                    <p>posted on: 1/2/24</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
      ))}
     </div>
   
   </section>
  )

}
export default CustomerTestimonials;