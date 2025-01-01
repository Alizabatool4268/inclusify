import React from 'react';
import Link from 'next/link';


function Herosection() {
  return (
      <section className='w-screen overflow-x-hidden flex justify-around items-center flex-col bg-[#F7F7F7]'>
       
        <span className='h-[150px] w-screen flex justify-between items-end '>
          <h1 className='text-[50px] font-semibold '>Inclusify, Your Go to shop</h1>
          </span>
       
        <div className='h-[350px] w-screen flex justify-center items-center' style={{background:"url('/Images/shopping-hero-img.jpg')",backgroundRepeat:"no-repeat" , backgroundSize:"cover",backgroundBlendMode:"darken"}}>
            <Link href={"/AllProducts"} className=' h-[35px] w-[120px] flex justify-center items-center bg-blue-500 rounded-lg text-white'>Shop Now</Link>
        </div>
      </section>
  )
}

export default Herosection;