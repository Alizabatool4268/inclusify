import React from 'react';
import {client} from "@/sanity/lib/client";
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';

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
      <section className='grid grid-cols-3'>
        {data.map((productsdata)=>(
          <div className='' key={productsdata._id}>
            <Image height={100} width={100} src={urlFor(productsdata.productimage).url()} alt={productsdata.productname}></Image>
            <h1>{productsdata.productname}</h1>
            <Link href={`/AllProducts/${productsdata._id}`}>view more</Link>
         </div>
        ))}
      </section>
    </main>
  )
}

export default Page