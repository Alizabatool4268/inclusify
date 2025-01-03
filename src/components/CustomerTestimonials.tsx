import React from 'react';
import { IoStar } from "react-icons/io5";
import Image from 'next/image';
import { PiArrowCircleLeftLight } from "react-icons/pi";
import { PiArrowCircleRightLight } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";

function CustomerTestimonials() {
    const testimonials=[

        {   
            id:1,
            name:"James",
            position:"Software Developer",
            insights:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
            image:"/Images/team-member-five.png"
        },

        {   
            id:2,
            name:"Erick",
            position:"Scrum Master",
            insights:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
            image:"/Images/team-member-one.png"

        },
        {   
            id:3,
            name:"Stephen",
            position:"UI/UX Designer",
            insights:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
            image:"/Images/team-member-six.png"
        }
    ]
  return (
   <section className='w-screen bg-neutral-500 pt-16 overflow-x-hidden '>
   {/* heading and tagline */}
   <div className='h-[190px]'>
     <h2 className='text-[48px] font-bold msm:text-[40px] text-white'>Customer testimonials</h2>
     <p className='xsm:text-sm text-white '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
   </div>
   
    <div className='grid grid-cols-3 grid-rows-1 gap-2 xsm:grid-cols-1 ssm:grid-cols-1 msm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2'>
     {testimonials.map((testimonialArr)=>(
      <div className='flex justify-center items-center' key={testimonialArr.id}>

        <div className='h-[260px] w-[300px] xsm:ml-0 border-black border-solid border-[1px]
         flex justify-around items-center flex-col bg-white ' key={testimonialArr.id}>
            <div className='h-5 w-[290px] flex justify-start items-center text-yellow-500 '>
                <IoStar />
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
                      height={56}
                      width={56}
                      alt={testimonialArr.name}
                      className='rounded-[50%]'
                      ></Image>
                    <div>
                    <h6 className='font-bold'>{testimonialArr.name}</h6>
                    <p>{testimonialArr.position}</p>
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