import React from 'react';
import Image from 'next/image';

function Herosection() {
  return (
    <main className='w-screen overflow-x-hidden'>
      <section>
         <div className='grid grid-cols-3 grid-rows-2 gap-2'>
          <Image height={400} width={400} src={"/Images/genes.AMClone.jpg"} alt='heroImage' className='lg:w-full md:w-full sm:w-full lg-h-full md:full md:h-full  '  ></Image>
          
          <div className='bg-[#3c5377] w-full flex justify-center items-center'>
            <h1 className='text-[50px] text-center text-white font-bold'>Inclusify</h1>
          </div>
          
          <Image height={400} width={400} src={"/Images/genes.AMClone.jpg"} alt='heroImage' className='xl:w-full lg:w-full md:w-full sm:w-full '  ></Image>
          
          <div className='bg-[#d6caa8] w-full flex justify-center items-center'>
            <h1 className='text-[40px] text-center text-[#FFFFFF] font-bold'>One way Shop</h1>
          </div>

          <span className='flex justify-center items-center flex-col'>
            <h1 className='text-[35px] font-bold '>Inclusify</h1>
            <p className=' text-center'>Your go to store. we offer a variety of inclusive products. Get your cards ready, because you are goinng to find your perfect fit here. </p>
          </span>
          
          <Image height={400} width={400} src={"/Images/genes.AMClone.jpg"} alt='heroImage' className='xl:w-full lg:w-full md:w-full sm:w-full '  ></Image>
         </div>
      </section>
    </main>
  )
}

export default Herosection;