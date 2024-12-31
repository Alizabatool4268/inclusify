import React from 'react';
import {client} from "@/sanity/lib/client";
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';

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
console.log(data)
  return (
    <main>
      <section className='grid grid-cols-3'>
        {data.map((productsdata)=>(
          <div className='' key={productsdata._id}>
            <Image height={100} width={100} src={urlFor(productsdata.productimage).url()} alt={productsdata.productname}></Image>
          </div>
        ))}
      </section>
    </main>
  )
}

export default Page