import React from 'react';
import Link from 'next/link';
import { josefinSans } from '@/app/Fonts/fonts';


function Herosection() {
  return (
      <section className='w-screen overflow-x-hidden'>
         <section className={`bg-neutral-200 h-[200px] flex flex-col justify-center items-center ${josefinSans.className}`}>
          <h1 className='font-bold text-[35px]'>Inclusify, your go to shop</h1>
          <p>Get to know about our hardworking journey </p>
        </section>
        <div className='h-[350px] w-screen flex justify-center items-center' style={{background:"url('/Images/shopping-hero-img.jpg')",backgroundRepeat:"no-repeat" , backgroundSize:"cover",backgroundBlendMode:"darken"}}>
            <Link href={"/AllProducts"} className=' h-[35px] w-[120px] flex justify-center items-center bg-neutral-700 rounded-lg text-white'>Shop Now</Link>
        </div>
      </section>
  )
}

export default Herosection;