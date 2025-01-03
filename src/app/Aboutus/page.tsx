import React from 'react';
import { josefinSans } from '../Fonts/fonts';
import Link from 'next/link';
import Image from 'next/image';

function Page() {
  return (
    <main className='overflow-x-hidden'>
      <section className={`bg-neutral-200 h-[200px] flex flex-col justify-center items-center ${josefinSans.className}`}>
        <h1 className='font-bold text-[35px]'>About us</h1>
        <p>Get to know about our hardworking journey </p>
     </section>
     <section>
      <div className='h-[350px] w-screen flex justify-center items-center' style={{background:"url('/Images/shopping-hero-img.jpg')",backgroundRepeat:"no-repeat" , backgroundSize:"cover",backgroundBlendMode:"darken"}}>
       <Link href={"/AllProducts"} className=' h-[35px] w-[120px] flex justify-center items-center bg-neutral-700 rounded-lg text-white'>Shop Now</Link>
      </div>
     </section>
     <section className='flex items-center justify-around mt-11 msm:flex-col ssm:flex-col xsm:flex-col'>
      <div className='flex justify-center items-center flex-col gap-3'>
        <h1 className={`text-[35px] font-bold ${josefinSans.className}`}>Our journey</h1>
        <p className='w-[400px] text-center bg-neutral-200 rounded-lg xsm:w-[270px] ssm:w-[300px]'>
          Our journey started from a small local store in our area, but we knew we had the potential
          to make our brand. so we launched our brand and we wanted that our brands products should be good
          enough to fill the gap between different types of bodies and needs, and should be perfect
          and go to for everyone that is why we named our brand inclusive. our brand started and made amazing growth
          with in a few timespan.
          <br />
          Now here we are with our own e-commerce site expanding our bussiness and making our name in the
          world of bussiness. at the end of the day you should never give up, and one day its all gonna 
          be worth it.
        </p>
      </div>
      <Image height={200} width={200} src={"/Images/shooping-bag.png"} alt='aboutusimage'></Image>
     </section>
    </main>
  )
}

export default Page;