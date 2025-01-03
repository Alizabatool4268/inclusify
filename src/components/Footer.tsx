import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { josefinSans } from '@/app/Fonts/fonts';

function Footer() {
  return (
    <footer className='bg-neutral-700 text-white mt-11'>
      <div className='flex justify-around items-center bg-neutral-800 ssm:flex-col xsm:flex-col'>
        <h1 className={`text-[35px] font-bold ${josefinSans.className}`}>Inclusify</h1>
        <span className='flex msm:flex-col msm:gap-2 ssm:flex-col ssm:gap-2 xsm:flex-col xsm:gap-2'>
         <input type="email" name='email' placeholder='Enter your email' className='text-black px-4 border-none h-[35px] w-[230px]'/>
         <button className='w-[230px] bg-black h-[35px] text-white'>Subscribe</button>
        </span>
      </div>


     <div className='grid grid-cols-3 grid-rows-1 gap-4 xsm:grid-cols-1 xsm:grid-rows-3 py-3'>
      <span className='xsm:flex xsm:justify-center xsm:flex-col xsm:items-center text-center'>
            <h6 className='font-bold text-[18px]'>Catagories</h6>
              <ul className='text-white sm:text-sm'>
                 <li>sneakers</li>
                 <li>Coats</li>
                 <li>Watches</li>
                 <li>Headphones</li>
                 <li>Sweaters</li>
             </ul>
       </span>
        <span className='xsm:flex xsm:justify-center xsm:flex-col xsm:items-center text-center'>
           <h6 className='font-bold text-[18px]'>Customer Care</h6>
             <ul className='text-white sm:text-sm'>
               <li>My Account</li>
                <li>Discount</li>
                <li>Returns</li>
                <li>Orders History</li>
                <li>Order Tracking</li>
            </ul>
        </span>
        <span className='xsm:flex xsm:justify-center xsm:flex-col xsm:items-center text-center'>
           <h6 className='font-bold text-[18px]'>Pages</h6>
            <ul className='text-white sm:text-sm'>
                <li>Blog</li>
                <li>Browse the Shop</li>
                <li>Category</li>
                <li>Pre-Built Pages</li>
                <li>Visual Composer Elements</li>
             </ul>
         </span>
      </div>
      <div className='flex justify-around items-center bg-neutral-800'>
            <p className='text-white'>© Inclusify - All Rights Reserved</p>
             <span className=' flex justify-center items-center gap-1 text-white'>
                <FaFacebook />
                <FaTwitterSquare />
                <FaInstagramSquare />
             </span>
        </div>
    </footer>
  )
}

export default Footer;