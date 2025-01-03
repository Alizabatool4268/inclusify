"use client";
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useCart } from '@/components/cartContext';
import { FaShoppingCart } from "react-icons/fa";

// yahan se mai ne type remove ki hai product details walli
function Header() {
  const [Opensidebar,setOpensidebar] = useState(false);
  const [Closesidebar,setClosesidebar] = useState(true);
   const { cartItems } = useCart();
  const togglesidebar = ()=>{
    setOpensidebar(!Opensidebar)
    setClosesidebar(!Closesidebar)
  }

  return (
    <header className='overflow-x-hidden'>
      {/* dekstop side bar */}
        <nav className='flex justify-around items-center bg-neutral-700 text-white h-[70px] xsm:hidden ssm:hidden'>
          <div className='text-[30px] font-bold ssm:text-[24px] xsm:text-[20px]'>
            Inclusify
          </div>
          <div className=' w-[310px] text-[18px] flex justify-between items-center ssm:w-[230px] xsm:text-sm xsm:w-[210px]'>
            <Link href={"/"}>Home</Link>
            <Link href={"/Aboutus"}>About us</Link>
            <Link href={"/AllProducts"}>Products</Link>
            <span className='flex'>
            <Link href={"/Cart"} className='mt-1'><FaShoppingCart/></Link>
            <span className='h-4 w-4 rounded-[50%] flex justify-center text-white items-center text-sm bg-red-500'>{cartItems.length}</span>
            </span>
          </div>
        </nav>
        {/*for mobile screens*/}
        <nav className='flex justify-around items-center bg-neutral-700 text-white h-[70px] msm:hidden sm:hidden md:hidden lg:hidden'>
         <div className='text-[30px] ssm:text-[24px] xsm:text-[20px] font-bold'>
            Inclusify
          </div>
         <button
         onClick={togglesidebar}
          className="text-white text-[20px] focus:outline-none"
         ><IoMenu/></button>
        </nav>
        {/* mobile side bar */}
        <nav className={`fixed inset-y-0 right-0 transform ${
          Opensidebar ? 'translate-x-0' : 'translate-x-full'
         } md:hidden transition-transform duration-300 ease-in-out bg-white w-52 h-[300px] shadow-lg z-50`}>
          <button onClick={togglesidebar}><RxCross2 className='font-bold'/></button>
          <div className='text-[28px] text-[#213555] font-bold ssm:text-[24px] xsm:text-[20px] ml-8'>
            Inclusify
          </div>
          <div className=' w-[280px] flex justify-between items-center mt-3 flex-col gap-5 ssm:w-[230px] xsm:text-sm xsm:w-[210px]'>
            <Link href={"/"}>Home</Link>
            <Link href={"/AboutUs"}>About us</Link>
            <Link href={"/AllProducts"}>Products</Link>
            <span className='flex'>
            <Link href={"/Cart"} className='mt-1'><FaShoppingCart/></Link>
            <span className='h-4 w-4 rounded-[50%] text-white flex justify-center items-center text-sm bg-red-500'>{cartItems.length}</span>
            </span>
          </div>
        </nav>
        {Opensidebar && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
          onClick={togglesidebar}
        >
        </div>
         )}

    </header>
  )
}

export default Header;