import React from 'react';
import {client} from "@/sanity/lib/client";
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import { josefinSans } from '../Fonts/fonts';
import { IoStar } from "react-icons/io5";

async function Page() {
  interface productDetails {
    _id:string,
     productname:string,
     productdescription:string,
     productimage:string,
     productownerimage:string,
     ownername:string,
     productPrice:number,
     productraiting:number,
}
    const data:productDetails[] = await client.fetch(`
   *[_type == 'product']{
   _id,
   productname,
   productdescription,
   productimage,
   productownerimage,
   ownername,
   productPrice,
   productraiting
}
`)
console.log("product data",data)
if(!data){
  return(
    <p className='text-black'>check your internet</p>
  )
}
  return (
    <main>
      <section className={`bg-neutral-200 h-[200px] flex flex-col justify-center items-center ${josefinSans.className}`}>
        <h1 className='font-bold text-[35px]'>Latest products</h1>
        <p>Inclusify, Get the best experience in shopping</p>
      </section>
      <section className='grid grid-cols-3 gap-3 grid-rows-4 mt-11'>
        {data.map((productsdata)=>(
          <div className='flex justify-center items-center flex-col' key={productsdata._id} >
            <div className='flex justify-around items-center w-[280px] h-[45px] border-[1px] border-solid border-neutral-400 rounded-sm '>
              <Image width={40} height={40} src={urlFor(productsdata.productownerimage).url()} alt={productsdata.ownername} className='rounded-[50%]'></Image>
              <h5 className='text-zinc-800 font-bold'>{productsdata.ownername}</h5>
            </div>
           <div className='w-[280px] flex justify-center flex-col items-center gap-2 shadow-lg bg-neutral-300' key={productsdata._id}>
             <Image height={200} width={200} src={urlFor(productsdata.productimage).url()} alt={productsdata.productname}></Image>
             <span className='bg-white flex justify-center flex-col items-center gap-2'>
              <h1 className='font-bold text-center text-pink-500'>{productsdata.productname}</h1>
              <p className='font-bold'>Price: {productsdata.productPrice}$</p>
              <p className='flex gap-2 items-center'><IoStar className='text-yellow-500'/>{productsdata.productraiting}</p>
              <p className='text-center '>{`${productsdata.productdescription.slice(0,100)}...`}</p>
              <Link href={`/AllProducts/${productsdata._id}`} className='bg-black text-white h-[35px] w-full flex justify-center items-center rounded-lg'>view more</Link>
             </span>
           </div>
          </div>
        ))}
      </section>
    </main>
  )
}

export default Page